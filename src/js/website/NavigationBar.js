import { Component } from 'react';
import { colormode, isInViewport, swapTheme, updateTheme } from '../../index';
import '../../css/website/navigationbar.css';
export default class NavigationBar extends Component {
    constructor() {
        super();
        this.state = { hide: true, theme: colormode.svg };
    }
    switchTheme() {
        swapTheme();
        this.setState({ hide: this.state.hide, theme: colormode.svg });
    }
    isView() {
        if (isInViewport('navigation') && this.state.hide) {
            this.setState({ hide: false, theme: this.state.theme });
            let delay = 0;
            for (const e of document.getElementsByClassName('nav-item')) {
                delay += 0.5;
                setTimeout(() => {
                    //e.classList.add('fade-in-0');
                    e.classList.remove('hide');
                }, delay * 1000);
            }
            return true;
        } else {
            return false;
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
            if (!this.isView()) setTimeout(() => this.isView(), 100);
        }, 1500);
        return (
            <div id='navigation'>
                <ul id='nav-bar'>
                    <li id='nav-about' className='nav-item nav-item-page' onClick={() => {
                        window.location.href = '#about';
                    }}>ABOUT</li>
                    <li id='nav-projects' className='nav-item nav-item-page' onClick={() => {
                        window.location.href = '#projects';
                    }}>PROJECTS</li>
                    <li id='nav-theme' className='nav-item' onClick={() => this.switchTheme() }>{this.state.theme}</li>
                    <li id='nav-projects' className='nav-item nav-item-page' onClick={() => {
                        window.location.href = '#experience';
                    }}>EXPERIENCE</li>
                    <li id='nav-projects' className='nav-item nav-item-page' onClick={() => {
                        window.location.href = '#contact';
                    }}>CONTACT</li>
                </ul>
            </div>
        );
    }
}