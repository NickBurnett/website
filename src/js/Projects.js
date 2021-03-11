import { Component } from 'react';
import { isInViewport } from '../index';
import '../css/projects.css';
export class Project extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const stack = [];
        const desc = [];
        let key = 0;
        for (let s of this.props.stack) {
            stack.push(<div key={key} className='project-stack-item'>{s}</div>);
            key++;
        }
        for (let d of this.props.desc) {
            desc.push(<div key={key} className='project-desc'>{d}</div>);
            key++;
        }
        return (
            <div className='projects-project'>
                <div className='project-title'>{this.props.title}</div>
                <div className='project-stack-container'>{stack}</div>
                {desc}
            </div>
        );
    }
}
export default class Projects extends Component {
    constructor() {
        super();
        this.projects = [
            <Project
                key='portfolio'
                id='portfolio'
                tab='Portfolio Site'
                title='Portfolio Website'
                stack={[
                    'ReactJS',
                    'NodeJS',
                    'ExpressJS',
                    'HTML',
                    'JavaScript',
                    'CSS',
                    'NGINX'
                ]}
                desc={[
                    'A website carefully designed to highlight my technical strengths and present my development portfolio.',
                    'Everything you see on this site is pure JS, JSX and CSS. It\'s all custom, so libraries like TailwindCSS and Bootstrap weren\'t used.',
                    'To keep everything in-house and completely customized, the website is served on a single-purpose RaspberryPi3 running NGINX as a reverse proxy.'
                ]}
            />,
            <Project
                key='hackutd-stock'
                id='hackutd-stock'
                tab='Trading Docks'
                title='Stock Trading Algorithm Builder'
                stack={[
                    'ReactJS',
                    'NodeJS',
                    'ExpressJS',
                    'JavaScript',
                    'TypeScript',
                    'Python',
                    'MongoDB'
                ]}
                desc={[
                    'A website designed to cleanse the frustration and ambiguity that comes with modern day trading. The website targets newcomers into the Stock Market by providing a simple, intuitive way to test out their custom stock trading algorithms.',
                    'Everything you see on the site is pure JS, JSX and CSS. Libraries like TailwindCSS and Bootstrap weren\'t used in order to provide users with the most efficient and comfortable experience.',
                    'We created our own compiled language in Python to make the algorithm building experience as clean as possible. Our most complex actions could be done in as little as 15 characters with our customized language.',
                    'The site features a customized login system with built-in caching to improve the user\'s experience. While authentication with popular accounts like Google, Facebook and GitHub isn\'t possible just yet, our seamlessly designed system allows a quick and easy way to integrate them in the future.'
                ]}
            />,
            <Project
                key='acm-bot'
                id='acm-bot'
                tab='Community Bot'
                title='Automated Community Bot'
                stack={[
                    'DiscordJS',
                    'NodeJS',
                    'ExpressJS',
                    'JavaScript',
                    'TypeScript',
                    'Google Cloud'
                ]}
                desc={[
                    'An automated community service for members of the Association of Computing Machinery designed to integrate the technologies and divisions of ACM into a single tool.',
                    'Using the popular DiscordJS library, I\'m working on a team of 3 to provide the ACM community with powerful and intuitive tools to improve their overall productivity and experience.'
                ]}
            />,
            <Project
                key='mma'
                id='mma'
                tab='Event Planner'
                title='Meet-Me-At'
                stack={[
                    'React Native',
                    'NodeJS',
                    'ExpressJS',
                    'HTML',
                    'JavaScript',
                    'CSS',
                    'MongoDB'
                ]}
                desc={[
                    'An event planning solution designed to simplify event planning between family members, friends and the local community.',
                    'With a fully-functioning login and registration system, MMA thrives on an incredibly simplistic visual design and experience. The application is visually responsive across multiple devices including Android and all-generation iPhones.',
                    'The backend is built on the NodeJS runtime with cross-device compatibility and multi-threaded integrations with the MongoDB Cluster.'
                ]}
            />,
            <Project
                key='game-frame'
                id='game-frame'
                tab='Game Framework'
                title='Java Game Framework'
                stack={[
                    'Java',
                    'LWJGL',
                    'OpenGL',
                    'OpenAL',
                    'Socket I/O'
                ]}
                desc={[
                    'A work-in-progress, optimized 2D game framework written in Java around the LWJGL library. The framework targets graphics at a primitive level to increase optimization and seamlessness in development.',
                    'The game framework will feature a completely customized integration with Java\'s Socket I/O engine to allow for cross-platform, cross-device multiplayer via TCP.'
                ]}
            />,
            <Project
                key='cli'
                id='cli'
                tab='CLI Toolkit'
                title='Linux Command-line Toolkit'
                stack={[
                    'Java',
                    'C',
                    'C++',
                    'Python',
                    'Bash',
                    'JavaScript',
                    'TypeScript',
                    'NodeJS',
                    'ExpressJS'
                ]}
                desc={[
                    'A deployed toolkit for Linux-based operating systems for increases in the quality of the command-line experience.',
                    'The toolkit sports a multi-purpose string generator used to generate passwords, keys and more. In addition, the toolkit sports a practical regex matcher with full support for modern regex characters and patterns.',
                    'Using the NodeJS runtime and ExpressJS library, the toolkit is deployed on a webserver hosted on a multi-purpose RaspberryPi3 with an integrated API to download various installation scripts using the command-line.'
                ]}
            />
        ]
        this.state = { hide: true, active: this.projects[0] };
    }
    isView() {
        if (isInViewport('projects') && this.state.hide) {
            this.setState({ hide: false, active: this.state.active });
            document.getElementById('projects').classList.add('fade-in-1');
            document.getElementById('projects').classList.remove('hide');
        }
    }
    activate(id) {
        if (!document.getElementById('projects')) return false;
        let i = 0;
        for (let e of document.getElementsByClassName('projects-list-item')) {
            if (e.id === `project-${id}`) {
                e.classList.add('projects-list-item-active');
                document.getElementById('project-select').style.setProperty('--index', i);
            } else {
                e.classList.remove('projects-list-item-active');
            }
            i += 1;
        }
        let p = this.projects[0];
        for (let e of this.projects) {
            if (e.props.id === id) {
                p = e;
                break;
            }
        }
        this.setState({ hide: this.state.hide, active: p });
        return true;
    }
    componentDidMount() {
        window.addEventListener('scroll', this.isView.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.isView.bind(this));
    }
    render() {
        const tabs = [];
        for (let p of this.projects) {
            let active = '';
            if (p.props.id === this.state.active.props.id) {
                active = 'projects-list-item-active';
            }
            const e = <li key={p.props.id} id={`project-${p.props.id}`} className={`projects-list-item ${active}`} onClick={() => this.activate(p.props.id)}>{p.props.tab}</li>;
            tabs.push(e);
        }
        return (
            <div id='projects' className='hide'>
                <div id='projects-title'>Projects</div>
                <div id='projects-container'>
                    <ul id='projects-list'>
                        {tabs}
                        <div id='project-select'></div>
                    </ul>
                    <div id='projects-view'>
                        {this.state.active}
                    </div>
                </div>
            </div>
        );
    }
}