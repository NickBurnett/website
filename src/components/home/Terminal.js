import React from 'react';
import { Redirect } from 'react-router-dom';
import { updateNav } from '../core/NavigationBar';
import '../../css/page/homepage.css';

class Terminal extends React.Component {
    constructor() {
        super();
        this.state = { text: '', redirect: undefined }
    }
    initTerminalOutput() {
        let t = 'Welcome to the customized website terminal! This terminal is responsive and will allow you to interact with and navigate the site. In addition, you can access basic information such as my Resume, LinkedIn and GitHub.\nClick the dark-gray bar at the bottom of the terminal and type \'help\' to get started...\n\n';
        this.setState({ text: t });
    }
    output(out) {
        this.setState({ text: this.state.text + out });
    }
    async handleCommand(command) {
        let arr = command.split(' ');
        await this.output('> ' + command + '\n');
        switch (arr[0]) {
            case 'help':
                await this.output('Valid Commands\n- help\n- clear\n- github\n- linkedin\n- navigate <about, projects>\n');
                break;
            case 'clear':
                this.setState({ text : ''});
                break;
            case 'github':
                window.open('https://github.com/NickBurnett');
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/nicolasaburnett/');
                break;
            case 'navigate':
                if (arr.length !== 2 || (arr[1] !== 'about' && arr[1] !== 'projects')) {
                    await this.output('Invalid command usage\n');
                    break;
                }
                if (arr[1] === 'about') {
                    updateNav('nav-about');
                    await this.setState({
                        text: this.state.text,
                        redirect: '/about'
                    });
                } else {
                    updateNav('nav-projects');
                    await this.setState({
                        text: this.state.text,
                        redirect: '/projects'
                    });
                }
                break;
            default:
                await this.output('Invalid Command\n');
                break;
        }
    }
    componentDidMount() {
        this.initTerminalOutput();
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={ this.state.redirect }/>
        }
        return (
            <div id='home-terminal'>
                <textarea readOnly id='home-terminal-output' value={this.state.text}></textarea>
                <input type='text' id='home-terminal-input' onKeyPress={(event) => {if (event.key === 'Enter') { this.handleCommand(document.getElementById('home-terminal-input').value); document.getElementById('home-terminal-output').scrollTop = document.getElementById('home-terminal-output').scrollHeight * 2; document.getElementById('home-terminal-input').value = ''; }}}></input>
            </div>
        );
    }
}
export default Terminal;
