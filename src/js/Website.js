import { Component } from 'react';
import { updateTheme } from '../index';
import NavigationBar from './website/NavigationBar';
import Introduction from './Introduction';
import About from './About';
import Projects from './Projects'
import Socials from './Socials';
import Contact from './Contact';
import '../css/website.css';
const loadTime = 2500;
export default class Website extends Component {
    constructor() {
        super();
        updateTheme();
        this.state = { loaded: false, loadProgress: 0 };
    }
    componentDidMount() {
        this.setState({ loaded: false, loadProgress: 0, loadID: setInterval(() => {
            if (this.state.loadProgress >= 100) {
                clearInterval(this.state.loadID);
                setTimeout(() => {
                    document.getElementById('load-shell').classList.add('hide', 'load-fade');
                    document.getElementById('load-bar').classList.add('hide', 'load-fade');
                    document.getElementById('load-loading').classList.add('hide', 'load-fade');
                    document.getElementById('load-container').classList.add('hide', 'load-fade');
                    setTimeout(() => this.setState({ loaded: true }), 750);
                }, 500);
            } else {
                const progress = 1;
                this.setState({ loaded: this.state.loaded, loadProgress: this.state.loadProgress + progress, loadID: this.state.loadID });
                let load = document.getElementById('load-bar');
                if (load) {
                    load.style.setProperty('--percent', parseInt(getComputedStyle(load).getPropertyValue('--percent')) + progress);
                }
            }
        }, loadTime / 100) });
    }
    render() {
        if (!this.state.loaded) {
            return (
                <div id='load'>
                    <svg id='load-container' width='100%' height='100%'>
                        <circle id='load-shell' className='load-circle' cx='50%' cy='50%' r='20%'></circle>
                        <circle id='load-bar' className='load-circle' cx='50%' cy='50%' r='20%'></circle>
                        <text id='load-loading' x='50%' y='50%' alignmentBaseline='central'>LOADING</text>
                    </svg>
                </div>
            );
        }
        return (
            <div id='website'>
                <NavigationBar />
                <Introduction />
                <About />
                <Projects />
                <Socials />
                <Contact />
            </div>
        );
    }
}