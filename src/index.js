import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import styles from './styles.css'
console.log(styles);

ReactDOM.render(
    <HelloWorld message="Hello world"/>,
    document.getElementById('hello-world')
);
