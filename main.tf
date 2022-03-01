provider "aws" {
  region = "us-east-2"
}
resource "aws_ecr_repository" "image_repo" {
  name = "website"
}
resource "aws_ecs_cluster" "cluster" {
  name = "website"
}
resource "aws_ecs_task_definition" "task" {
  family                   = "website-task"
  container_definitions    = <<DEFINITION
  [
    {
      "name": "website-task",
      "image": "${aws_ecr_repository.image_repo.repository_url}",
      "essential": true,
      "portMappings": [
        {
          "containerPort": 3000,
          "hostPort": 3000
        }
      ],
      "memory": 512,
      "cpu": 256
    }
  ]
  DEFINITION
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  memory                   = 512
  cpu                      = 256
  execution_role_arn       = aws_iam_role.iamWebsite.arn
}
resource "aws_default_vpc" "default_vpc" {}
resource "aws_default_subnet" "default_subnet_a" {
  availability_zone = "us-east-2a"
}
resource "aws_default_subnet" "default_subnet_b" {
  availability_zone = "us-east-2b"
}
resource "aws_ecs_service" "website-service" {
  name            = "website-service"
  cluster         = aws_ecs_cluster.cluster.id
  task_definition = aws_ecs_task_definition.task.arn
  launch_type     = "FARGATE"
  desired_count   = 1
  load_balancer {
    target_group_arn = aws_lb_target_group.tg.arn
    container_name   = aws_ecs_task_definition.task.family
    container_port   = 3000
  }
  network_configuration {
    subnets          = ["${aws_default_subnet.default_subnet_a.id}", "${aws_default_subnet.default_subnet_b.id}"]
    assign_public_ip = true
    security_groups  = ["${aws_security_group.svc_sg.id}"]
  }
}
resource "aws_iam_role" "iamWebsite" {
  name               = "iamWebsite"
  assume_role_policy = data.aws_iam_policy_document.assume_role_policy.json
}
resource "aws_alb" "load_balancer" {
  name               = "website-lb"
  load_balancer_type = "application"
  subnets            = ["${aws_default_subnet.default_subnet_a.id}", "${aws_default_subnet.default_subnet_b.id}"]
  security_groups    = ["${aws_security_group.lb_sg.id}"]
}
resource "aws_security_group" "svc_sg" {
  ingress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    security_groups = ["${aws_security_group.lb_sg.id}"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
resource "aws_security_group" "lb_sg" {
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
resource "aws_lb_target_group" "tg" {
  name        = "website-tg"
  port        = 80
  protocol    = "HTTP"
  target_type = "ip"
  vpc_id      = aws_default_vpc.default_vpc.id
  health_check {
    matcher = "200,301,302"
    path    = "/"
  }
}
resource "aws_acm_certificate" "cert" {
  domain_name       = "nickburnett.me"
  validation_method = "DNS"

}
resource "aws_lb_listener" "listener" {
  depends_on = [
    aws_lb_target_group.tg
  ]
  load_balancer_arn = aws_alb.load_balancer.arn
  port              = 80
  protocol          = "HTTP"
  default_action {
    type = "redirect"
    redirect {
      port        = 443
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}
resource "aws_lb_listener" "listener_https" {
  depends_on = [
    aws_lb_target_group.tg
  ]
  load_balancer_arn = aws_alb.load_balancer.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = aws_acm_certificate.cert.arn
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.tg.arn
  }
}
data "aws_iam_policy_document" "assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}
resource "aws_iam_role_policy_attachment" "iamWebsite_policy" {
  role       = aws_iam_role.iamWebsite.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}
