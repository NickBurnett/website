import React from 'react';
import '../../css/page/homepage.css';

class Introduction extends React.Component {
    render() {
        return (
            <div>
                <div id='home-intro'>
                    <span id='home-intro-text'>Hello, I'm Nick. I'm a <span className='text-highlight-1'>college student</span> and open-source <span className='text-highlight-1'>software developer</span>.</span>
                </div>
            </div>
        );
    }
}
export default Introduction;
