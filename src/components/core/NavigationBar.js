import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/core/navigationbar.css';

class NavigationBar extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div id="navigation">
                <ul id="navbar">
                    <Link to="/"><li id="nav-home" className="nav-item">Home</li></Link>
                    <Link to="/about"><li id="nav-about" className="nav-item">About Me</li></Link>
                    <Link to="/projects"><li id="nav-projects" className="nav-item">Projects</li></Link>
                </ul>
            </div>
        );
    }
}
export default NavigationBar;
