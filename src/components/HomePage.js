import React from 'react';
import Introduction from './home/Introduction';
import Terminal from './home/Terminal';
import { updateNav } from './core/NavigationBar';
import '../css/page/homepage.css';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {};
        updateNav('nav-home');
    }
    render() {
        return (
            <div id='main-page'>
                <Introduction />
                <Terminal/>
            </div>
        );
    }
}
export default HomePage;
