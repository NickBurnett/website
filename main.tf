provider "aws" {
  region = "us-east-2"
}
resource "aws_ecr_repository" "image_repo" {
  name = "website"
}
