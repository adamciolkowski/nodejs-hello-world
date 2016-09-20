import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import './styles.css'

ReactDOM.render(
    <HelloWorld message="Hello world"/>,
    document.getElementById('hello-world')
);
