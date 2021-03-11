import { Component } from 'react';
import { isInViewport } from '../index';
import '../css/contact.css';
export default class Contact extends Component {
    constructor() {
        super();
        this.state = { hide: true };
    }
    downloadResume() {
        let dl = document.createElement('a');
        dl.href = './resume.pdf';
        dl.download = 'NicolasBurnett_Resume.pdf';
        document.body.appendChild(dl);
        dl.click();
        document.body.removeChild(dl);
    }
    inView() {
        if (isInViewport('contact') && this.state.hide) {
            this.setState({ hide: false });
            document.getElementById('contact').classList.add('fade-in-1');
            document.getElementById('contact').classList.remove('hide');
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
            <div id='contact' className='hide'>
                <div id='contact-title'>Contact</div>
                <div className='contact-paragraph'>
                    If you're interested, please get into contact with me! I'm always open to new opportunities and learning something new. If you have any questions, please reach out! Also, I've posted my resume below so if you're a recruiter or someone who's curious about my work please take a look!
                </div>
                <div id='contact-buttons'>
                    <div className='contact-button' onClick={() => window.open('mailto:nicolasandrewburnett@gmail.com') }>Email</div>
                    <div className='contact-button' onClick={() => this.downloadResume()}>Resume</div>
                </div>
            </div>
        );
    }
}