import React from 'react';
import CareerItem from './general/CareerItem';
import { updateNav } from './core/NavigationBar';
import '../css/page/projectpage.css';

class ProjectsPage extends React.Component {
    constructor() {
        super();
        this.state = {};
        updateNav('nav-projects');
    }
    render() {
        return (
            <div id='projectpage'>
                <div className='career-flex'>
                    <CareerItem
                        title='Personal Website'
                        sub={[
                            'JavaScript, ReactJS, JSX, CSS, NodeJS, ExpressJS'
                        ]}
                        desc={[
                            'A completely custom-coded website to display my education, experience and side-projects',
                            'Using the ReactJS library and vanilla CSS, the website is packed with visual appeal and seamless functionality'
                        ]}
                    />
                    <CareerItem
                        title='Game Engine'
                        sub={[
                            'Java, LWJGL, OpenGL, OpenAL, Socket I/O'
                        ]}
                        desc={[
                            'A completely custom-coded wrapper around the primitive tools provided by LWJGL',
                            'Developed a synchronized sprite rendering library for 100+ sprite types to ensure compatibility with various game styles',
                            'Conceptualized a system to take advantage of multi-threaded processors, speeding up logical and visual processes'
                        ]}
                    />
                    <CareerItem
                        title='CLI Tools'
                        sub={[
                            'Java, C, C++, Python, Bash, ANSI'
                        ]}
                        desc={[
                            'A variety of command-line tools built in multiple languages with live updating from a self-hosted web-server',
                            'Redesigned a multi-function password generator in Python 3 and Java with integrated bash support for DOS and Linux CLIs',
                            'Streamlined various quality-of-life programs such as customized ANSI editing, built-in color wheels (RGB & HEX), cross-platform installation and live server-polling'
                        ]}
                    />
                    <CareerItem
                        title='Meet-Me-At'
                        sub={[
                            'JavaScript, React Native, NodeJS, ExpressJS, MongoDB'
                        ]}
                        desc={[
                            'An event-planning solution with customized event locations, times, guestlists and calendar feeds',
                            'Spearheaded and collaborated on a multi-threaded back-end for real-time visual updates within the event planner despite JavaScript\'s single-threaded nature',
                            'Engineered and coordinated 10+ front-end hooks for back-end tools integrated with custom network wrappers around Axios, HTTP and ExpressJS'
                        ]}
                    />
                </div>  
            </div>
        );
    }
}
export default ProjectsPage;
