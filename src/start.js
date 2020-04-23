import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact';
import App from './app';
import OtherProjects from './otherprojects';

let elem = <img src="/Logo.png" className="logo" alt="logo" width="100px" height="100px" />;
if (location.pathname == '/contact') {
    elem = <Contact />;



} else if (location.pathname == '/otherprojects') {

    elem = <OtherProjects />;


} else {

    elem = <App />;
}


ReactDOM.render(
    elem,
    document.querySelector('main')
);