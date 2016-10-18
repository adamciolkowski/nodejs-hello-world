import React, {Component, PropTypes} from 'react';
import './HelloWorld.scss'

export default class HelloWorld extends Component {

    render() {
        var text = `${this.props.message} from React component!`;
        return <div className="HelloWorld-text">{text}</div>;
    }
}

HelloWorld.propTypes = {
    message: PropTypes.string.isRequired
};
