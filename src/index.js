var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('./components/HelloWorld');

ReactDOM.render(
    React.createElement(HelloWorld, {message: 'Hello world'}),
    document.getElementById('hello-world')
);
