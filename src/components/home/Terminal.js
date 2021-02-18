import React from 'react';
import '../../css/page/homepage.css';

class Terminal extends React.Component {
    constructor() {
        super();
        this.state = { text: '' }
    }
    initTerminalOutput() {
        let t = 'Welcome to the customized website terminal! This terminal is responsive and will allow you to interact with and navigate the site. In addition, you can access basic information such as my Resume, LinkedIn and GitHub.\nClick the dark-gray bar at the bottom of the terminal and type \'help\' to get started...\n\n';
        this.setState({ text: t });
    }
    output(out) {
        this.setState({ text: this.state.text + out });
    }
    handleCommand(command) {
        let arr = command.split(' ');
        switch (command) {
            case 'help':
                this.output('> help\nValid Commands\n- help\n- clear\n- github\n- linkedin\n- resume\n- navigate <about, projects>\n');
                break;
            case 'clear':
                this.setState({ text : ''});
                break;
            case 'github':
                this.output('> github\n');
                window.open('https://github.com/NickBurnett');
                break;
            case 'linkedin':
                this.output('> linkedin\n');
                window.open('https://www.linkedin.com/in/nicolasaburnett/');
                break;
            case 'resume':
                this.output('> resume\nDownloading resume...\n');
                this.downloadResume();
                break;
            default:
                this.output('> Invalid Command');
                break;
        }
    }
    downloadResume() {
        
    }
    componentDidMount() {
        this.initTerminalOutput();
    }
    render() {
        return (
            <div id='home-terminal'>
                <textarea readOnly id='home-terminal-output' value={this.state.text}></textarea>
                <input type='text' id='home-terminal-input' onKeyPress={(event) => {if (event.key === 'Enter') { this.handleCommand(document.getElementById('home-terminal-input').value); document.getElementById('home-terminal-output').scrollTop = document.getElementById('home-terminal-output').scrollHeight * 2; document.getElementById('home-terminal-input').value = ''; }}}></input>
            </div>
        );
    }
}
export default Terminal;
