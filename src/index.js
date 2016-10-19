import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Person from './model/Person';

let person = new Person('John', 'Smith');
let message = `Hi ${person.fullName()}! Greetings `;

ReactDOM.render(
    <HelloWorld message={message}/>,
    document.getElementById('hello-world')
);
