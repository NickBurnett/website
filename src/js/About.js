import { Component } from 'react';
import { isInViewport } from '../index';
import '../css/about.css';
export default class About extends Component {
    constructor() {
        super();
        this.state = { hide: true };
    }
    inView() {
        if (isInViewport('about') && this.state.hide) {
            this.setState({ hide: false });
            document.getElementById('about').classList.add('fade-in-1');
            document.getElementById('about').classList.remove('hide');
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.inView.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.inView.bind(this));
    }
    render() {
        setTimeout(() => {
            this.inView();
        }, 3000);
        return (
            <div id='about' className='hide'>
                <div id='about-title'>About</div>
                <div className='about-paragraph'>
                    Hello! I'm Nick, a software developer and computer science student in Dallas, TX.
                </div>
                <div className='about-paragraph'>
                    I enjoy building things like websites, applications, games and useful tools. As a developer, my mission is to take any product or experience and make it as best as possible for the user.
                </div>
                <div className='about-paragraph'>
                    I'm currently a Sophomore at the University of Texas at Dallas. Aside from my stellar grades and uncompromising work ethic, I am heavily involved in the Association for Computing Machinery as a Developer.
                </div>
                <div className='about-paragraph'>
                    Since I'm always looking for any opportunity to expand my technical and team-based skills, I'm actively searching for internships for the Fall of 2022.
                </div>
                <div className='about-paragraph'>
                    If you're interested in getting in contact, please do so through my socials on the left. Also, feel free to check out my GitHub page for up-to-date changes to my projects.
                </div>
            </div>
        );
    }
}
