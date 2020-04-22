import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Intro from './intro';
import HeaderModal from './headermodal';
import Description from './description';
import ProjectOne from './projectone';
import ProjectTwo from './projecttwo';
import ProjectThree from './projectthree';
import Footer from './footer';





export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            menumodalvisible: false,
        };
        console.log("super");
    }

    toggleMenuModal() {
        console.log("toggle modal is running");

        this.setState({
            menumodalvisible: !this.state.menumodalvisible


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
                                <a className="header-work"> work </a>
                                <img src="/hamburger.png" className="header-hamburger" alt="hamburger" width="50px" height="50px" onClick={() => this.toggleMenuModal()} />
                            </div>
                        </div>
                    </div >
                    <Intro />
                    {this.state.menumodalvisible && (<HeaderModal toggleMenuModal={this.toggleMenuModal} />)}
                    <Description />
                    <ProjectOne />
                    <ProjectTwo />
                    <ProjectThree />
                    <div className="otherproject">
                        <h1>do you want to see other projects?</h1>
                        <button className="otherproject-yes">oh yes</button>
                        <button className="otherproject-no">nahhhh</button>
                        <button className="otherproject-play">i just wanna play</button>

                    </div>
                    <Footer />

                </BrowserRouter>
            </React.Fragment >
        );
    }





}