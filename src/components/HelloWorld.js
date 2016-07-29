import React, {Component, PropTypes} from 'react';

export default class HelloWorld extends Component {

    render() {
        var text = this.props.message + ' from React component!';
        return <div>{text}</div>;
    }
}

HelloWorld.propTypes = {
    message: PropTypes.string.isRequired
};
