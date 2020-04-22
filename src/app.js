import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import Intro from './intro';
import Footer from './footer';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            // uploaderIsVisible: false,
            // name: 'Edith'
        };
        console.log("super");
    }


    render() {
        return (
            <React.Fragment>
                {/* <BrowserRouter> */}

                <Header />
                <Intro />
                {/* <Footer /> */}

                {/* </BrowserRouter> */}
            </React.Fragment>
        );
    }





}