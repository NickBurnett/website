import React from 'react';
import '../../css/page/aboutpage.css';

class CareerItem extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const sub = [];
        const desc = [];
        const flex = [];
        if (this.props.sub) {
            for (const key of this.props.sub) {
                sub.push(<span className='career-item-sub'>{key}</span>);
                sub.push(<br />);
            }
        }
        if (this.props.desc) {
            for (const key of this.props.desc) {
                desc.push(<span className='career-item-desc'>- {key}</span>);
                desc.push(<br />);
            }
        }
        if (this.props.flex) {
            for (const key of this.props.flex) {
                flex.push(<div className='career-item-desc career-item-flexitem'>{key}</div>);
            }
        }
        return (
            <div className='career-item'>
                <span className='career-item-title'>{this.props.title}</span>
                <br />
                {sub}
                {desc}
                <div className='career-item-flex'>
                    {flex}
                </div>
            </div>
        );
    }
}
export default CareerItem;