import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/core/navigationbar.css';
function colorize(color, id) {
    if (!document.getElementById(id).classList.contains('nav-item-cur')) return;
    const titles = document.getElementsByClassName('career-item-title');
    const subs = document.getElementsByClassName('career-item-sub');
    const descs = document.getElementsByClassName('career-item-desc');
    const flexs = document.getElementsByClassName('career-item-flexitem');
    let title = '--gray0';
    let sub = '--gray0';
    let desc = '--gray0';
    let flex = '--gray0';
    if (color) {
        title = '--orange0';
        sub = '--green0';
        desc = '--purple1';
        flex = '--red1';
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
}
function select(id) {
    const home = document.getElementById('nav-home');
    const about = document.getElementById('nav-about');
    const projects = document.getElementById('nav-projects');
    console.log(home);
    console.log("TEST");
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
                    <Link to='/' onClick={ () => select('nav-home') }><li id='nav-home' className='nav-item'>Home</li></Link>
                    <Link to='/about' onClick={ () => select('nav-about') }><li id='nav-about' className='nav-item' onMouseMove={ () => colorize(true, 'nav-about') } onMouseOver={ () => colorize(true, 'nav-about') } onMouseOut={ () => colorize(false, 'nav-about') }>About Me</li></Link>
                    <Link to='/projects' onClick={ () => select('nav-projects') }><li id='nav-projects' className='nav-item' onMouseMove={ () => colorize(true, 'nav-projects') } onMouseOver={ () => colorize(true, 'nav-projects') } onMouseOut={ () => colorize(false, 'nav-projects') }>Projects</li></Link>
                </ul>
            </div>
        );
    }
}
export default NavigationBar;
