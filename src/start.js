import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact';
import App from './app';

let elem = <img src="/Logo.png" className="logo" alt="logo" width="100px" height="100px" />;
if (location.pathname == '/contact') {
    elem = <Contact />;



} else {

    elem = <App />;
}


ReactDOM.render(
    elem,
    document.querySelector('main')
);