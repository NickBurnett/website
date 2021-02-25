import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/core/navigationbar.css';
import { setCurrentPage } from '../../index';
export function colorize(color, id) {
    if (!document.getElementById(id).classList.contains('nav-item-cur')) return;
    const titles = document.getElementsByClassName('career-item-title');
    const subs = document.getElementsByClassName('career-item-sub');
    const descs = document.getElementsByClassName('career-item-desc');
    const flexs = document.getElementsByClassName('career-item-flexitem');
    const th1s = document.getElementsByClassName('text-highlight-1');
    const th2s = document.getElementsByClassName('text-highlight-2');
    let title = '--gray0';
    let sub = '--gray0';
    let desc = '--gray0';
    let flex = '--gray0';
    let th1 = '--gray0';
    let th2 = '--gray0';
    if (color) {
        title = '--orange0';
        sub = '--purple1';
        desc = '--blue1';
        flex = '--blue1';
        th1 = '--purple3';
        th2 = '--orange0';
    }
    for (let e of titles) {
        e.style.setProperty('--color', getComputedStyle(e).getPropertyValue(title));
    }
    for (let e of subs) {
        e.style.setProperty('--color', getComputedStyle(e).getPropertyValue(sub));
    }
    for (let e of descs) {
        e.style.setProperty('--color', getComputedStyle(e).getPropertyValue(desc));
    }
    for (let e of flexs) {
        e.style.setProperty('--color', getComputedStyle(e).getPropertyValue(flex));
    }
    for (let e of th1s) {
        e.style.setProperty('--color', getComputedStyle(e).getPropertyValue(th1));
    }
    for (let e of th2s) {
        e.style.setProperty('--color', getComputedStyle(e).getPropertyValue(th2));
    }
}
export function updateNav(id) {
    setCurrentPage(id);
    const home = document.getElementById('nav-home');
    const about = document.getElementById('nav-about');
    const projects = document.getElementById('nav-projects');
    if (home) {
        home.classList.remove('nav-item-cur');
    }
    if (about) {
        about.classList.remove('nav-item-cur');
    }
    if (projects) {
        projects.classList.remove('nav-item-cur');
    }
    if (document.getElementById(id)) {
        document.getElementById(id).classList.add('nav-item-cur');
    }
}
class NavigationBar extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div id='navigation'>
                <ul id='navbar'>
                    <Link to='/'><li id='nav-home' className='nav-item' onMouseMove={ () => colorize(true, 'nav-home') } onMouseOver={ () => colorize(true, 'nav-home') } onMouseOut={ () => colorize(false, 'nav-home') }>Home</li></Link>
                    <Link to='/about'><li id='nav-about' className='nav-item' onMouseMove={ () => colorize(true, 'nav-about') } onMouseOver={ () => colorize(true, 'nav-about') } onMouseOut={ () => colorize(false, 'nav-about') }>About Me</li></Link>
                    <Link to='/projects'><li id='nav-projects' className='nav-item' onMouseMove={ () => colorize(true, 'nav-projects') } onMouseOver={ () => colorize(true, 'nav-projects') } onMouseOut={ () => colorize(false, 'nav-projects') }>Projects</li></Link>
                </ul>
            </div>
        );
    }
}
export default NavigationBar;
