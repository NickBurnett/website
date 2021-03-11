import { Component } from 'react';
import '../css/footer.css'
export default class Footer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div id='footer'>
                <ul id='footer-list'>
                    <li className='foot-item'>nickburnett.me</li>
                </ul>
            </div>
        );
    }
}