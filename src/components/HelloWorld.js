import React from 'react';

class HelloWorld extends React.Component {

    render() {
        var text = this.props.message + ' from React component!';
        return <div>{text}</div>;
    }
}

HelloWorld.propTypes = {
    message: React.PropTypes.string.isRequired
};

module.exports = HelloWorld;
