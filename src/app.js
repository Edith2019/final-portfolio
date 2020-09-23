import React from "react";
import Header from "./navbar";
import Home from "./home";
import About from "./about";
import Projects from "./projects.js";
import Volunteer from "./volunteering.js";
import ContactN from "./contactN.js";
import FooterN from "./footerN.js";
import FadeIn from "./hooks/fadeIn.js";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menumodalvisible: false,
            windowsmodalvisible: false,
            shouldHide: false
        };
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Home />
                <About />
                <Projects />
                <Volunteer />
                <ContactN />
                <FooterN />
            </React.Fragment >
        );
    }
}