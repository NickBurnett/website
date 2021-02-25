import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
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
                    <Route path='/projects' render={routeProps => <ProjectPage {...routeProps}/>} />
                    <Route path='/about' render={routeProps => <AboutPage {...routeProps} />} />
                    <Route path='/' component={routeProps => <HomePage {...routeProps} />} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Website;
