import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Intro from './intro';
import Footer from './footer';

export default class App extends React.component {
    constructor() {
        super();
        this.state = {
            uploaderIsVisible: false,
            name: 'Edith'
        };
        console.log("super");
    }


    render() {
        return (
            <React.Fragment>
                {/* <BrowserRouter> */}
                <p>testing in app {this.state.name} </p>

                <Intro />
                {/* <Footer /> */}

                {/* </BrowserRouter> */}
            </React.Fragment>
        );
    }





}