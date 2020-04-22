import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import Intro from './intro';
import HeaderModal from './headermodal';
import Footer from './footer';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            MenuModalVisible: false,
        };
        console.log("super");
    }

    toggleMenuModal() {
        console.log("toggle modal is running");

        this.setState({
            MenuModalVisible: !this.state.MenuModalVisible


        });

    }




    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <div className="header">
                        <div className="header-container">
                            <img src="/Logo.png" className="header-logo" alt="logo" width="100px" height="100px" />
                            <div className="header-elem">
                                <a className="header-work"> Work </a>
                                <img src="/hamburger.png" className="header-hamburger" alt="hamburger" width="50px" height="50px" onClick={() => this.toggleMenuModal()} />
                            </div>
                        </div>
                    </div >
                    <HeaderModal />

                    <Intro />
                    {/* <Footer /> */}

                </BrowserRouter>
            </React.Fragment>
        );
    }





}