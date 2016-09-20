import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import 'style!./styles.css'

ReactDOM.render(
    <HelloWorld message="Hello world"/>,
    document.getElementById('hello-world')
);
