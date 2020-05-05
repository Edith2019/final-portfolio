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
            windowsmodalvisible: false
        };
    }

    toggleMenuModal() {
        this.setState({
            menumodalvisible: !this.state.menumodalvisible
        });
    }

    toggleWindowsModal() {
        this.setState({
            windowsmodalvisible: !this.state.windowsmodalvisible
        });
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <div className="header">
                        <div className="header-container">
                            <a className="header-logo-click" href="https://en.wikipedia.org/wiki/Raccoon#Intelligence" rel="noopener noreferrer" target='_blank' >
                                <img src="/raccoon.png" className="header-logo" alt="logo" width="70px" height="70px" background="none" />
                            </a>
                            <div className="header-elem" id="intro">
                                <a className="header-work" href="#project-one"> work </a>
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
                        <h1>curious to see more?</h1>
                        <div className="otherproject-app-buttons">
                            <a className="otherproject-yes" href="https://edith-portfolio.herokuapp.com/otherprojects" rel="noopener noreferrer" target='_blank'>bring it on</a>
                            <a className="otherproject-no" onClick={() => this.toggleWindowsModal()}>absolutely not</a>
                            {this.state.windowsmodalvisible && (<div className="otherporject-windows" onClick={() => this.toggleWindowsModal()}></div>)}
                            <a className="otherproject-play" href="https://connect4.gamesolver.org/" rel="noopener noreferrer" target='_blank'>i just wanna play</a>
                        </div>
                    </div>
                    <p className="copyright">Copyright © 2020 Edith-portfolio</p>
                    <Footer />
                </BrowserRouter>
            </React.Fragment >
        );
    }
}