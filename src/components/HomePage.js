import React from 'react';
import Introduction from './home/Introduction';
import Terminal from './home/Terminal';
import '../css/page/homepage.css';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {};
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
