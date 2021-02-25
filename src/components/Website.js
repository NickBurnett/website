import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './core/NavigationBar';
import Footer from './core/Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import '../css/index.css';

class Website extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div id='website'>
                <NavigationBar />
                <Switch>
                    <Route path='/projects'><ProjectPage /></Route>
                    <Route path='/about'><AboutPage /></Route>
                    <Route path='/'><HomePage /></Route>
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Website;
