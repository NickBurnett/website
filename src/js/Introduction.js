import { Component } from 'react';
import { isInViewport } from '../index';
import '../css/introduction.css';
export default class Introduction extends Component {
    constructor() {
        super();
        this.state = { hide: true };
    }
    isView() {
        if (isInViewport('introduction') && this.state.hide) {
            this.setState({ hide: false });
            document.getElementById('intro-hello').classList.add('fade-in-1');
            document.getElementById('intro-name').classList.add('fade-in-1');
            document.getElementById('intro-sub').classList.add('fade-in-1');
            document.getElementById('intro-desc').classList.add('fade-in-1');
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.isView.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.isView.bind(this));
    }
    render() {
        setTimeout(() => {
            this.isView();
        }, 500);
        return (
            <div id='introduction' className={this.state.hide ? 'hide' : ''}>
                <div id='intro-hello'>Hi, my name is</div>
                <div id='intro-name'>Nicolas Burnett.</div>
                <div id='intro-sub'>I'm a software engineer.</div>
                <div id='intro-desc'>I'm a college student based in the Dallas area honing practical software development skills and building cool projects in my free time.</div>
            </div>
        );
    }
}