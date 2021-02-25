import React from 'react';
import CareerItem from './general/CareerItem';
import { updateNav } from './core/NavigationBar';
import '../css/page/aboutpage.css';

class AboutPage extends React.Component {
    constructor() {
        super();
        this.state = {};
        updateNav('nav-about');
    }
    render() {
        return (
            <div id='about-page'>
                <div id='about'>
                    <span id='about-intro'>My name is Nicolas Burnett, 
                        and I'm a <span className='text-highlight-1'>college freshman </span> 
                        and self-taught <span className='text-highlight-1'>software engineer</span>. 
                        I'm pursuing a double-major in <span className='text-highlight-2'>Computer Science and Computer Engineering </span> 
                        at the <span className='text-highlight-2'>University of Texas at Dallas</span>. 
                        In addition to academics, I am involved in a number of student-led organizations, namely the <span className='text-highlight-2'>Association of Computing Machinery</span>. In my free time I plan out and
                        build any programming project that comes to mind, be it a <span className='text-highlight-1'>web-server for my CLI tools</span>,
                        a <span className='text-highlight-1'>customized 2D game engine</span>, or a <span className='text-highlight-1'>personalized website</span> to show it all off!
                    </span>
                </div>
                <div className='career-flex'>
                    <CareerItem
                        title='University of Texas at Dallas'
                        sub={['Bachelor of Computer Science', 'Bachelor of Computer Engineering']}
                        desc={[
                            '3.94/4.0 GPA',
                            'Course Completion: Computer Programming, Computer Architecture, Discrete Mathematics, Data Structures and Algorithms, Probability and Statistics, Programming in a Unix Environment',
                            'Student Organizations: Association of Computing Machinery, Open-source UTD, Codeburners, Artificial Intelligence Society'
                        ]}
                    />
                    <CareerItem
                        title='UTD CS Outreach'
                        sub={['Student Instructor']}
                        desc={[
                            'Private instructor of 10+ programming technologies, frameworks, libraries, and languages like Java, Python, C++, JavaScript, HTML, CSS and ReactJS',
                            'Camp instructor of 10+ programming technlogies, techniques, and languages such as Java, Python, C++, JavaScript, HTML and CSS',
                            'Advisor for industry professionals seeking knowledge in modern techniques and technologies such as responsive website development and ReactJS'
                        ]}
                    />
                    <CareerItem
                        title='Languages'
                        flex={[
                            'Java',
                            'C',
                            'C++',
                            'Python',
                            'HTML',
                            'CSS',
                            'JavaScript',
                            'TypeScript',
                            'Bash'
                        ]}
                    />
                    <CareerItem
                        title='Platforms & Technologies'
                        flex={[
                            'Git',
                            'Linux',
                            'MongoDB',
                            'ReactJS',
                            'NodeJS',
                            'ExpressJS'
                        ]}
                    />
                </div>
                
                
            </div>
        );
    }
}
export default AboutPage;
