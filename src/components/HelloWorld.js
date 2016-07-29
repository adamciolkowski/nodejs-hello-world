var React = require('react');

var HelloWorld = React.createClass({
    propTypes: {
        message: React.PropTypes.string.isRequired
    },
    render: function () {
        var text = this.props.message + ' from React component!';
        return <div>{text}</div>;
    }
});

module.exports = HelloWorld;
