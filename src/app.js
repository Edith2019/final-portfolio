import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import Intro from "./intro";
// import HeaderModal from "./headermodal";
// import Description from "./description";
// import ProjectOne from "./projectone";
// import ProjectTwo from "./projecttwo";
// import ProjectThree from "./projectthree";
// import Footer from "./footer";
import Header from "./navbar";
import Home from "./home";
import About from "./about";
import Projects from "./projects.js"
import Volunteer from "./volunteering.js"
import ContactN from "./contactN.js"
import FooterN from "./footerN.js"
import FadeIn from "./hooks/fadeIn.js"
// import MouseHover from "./hooks/mouseHover.js"
import cardProjects from './js/projectsData.js'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menumodalvisible: false,
            windowsmodalvisible: false,
            shouldHide: false,
            // cardProjects: this.cardProjects

        };
        // console.log("props for data", this.cardProjects)
        // console.log("this.props in app", this.props)
    }

    // toggleMenuModal() {
    //     this.setState({
    //         menumodalvisible: !this.state.menumodalvisible
    //     });
    // }

    // toggleWindowsModal() {
    //     this.setState({
    //         windowsmodalvisible: !this.state.windowsmodalvisible
    //     });
    // }



    render() {
        return (
            <React.Fragment>
                    <Header/>
                    <Home />
                        <FadeIn>
                            <About/>
                        </FadeIn>
                        <FadeIn>
                            <Projects/>
                        </FadeIn>
                        <FadeIn>
                            <Volunteer/>
                        </FadeIn>
                        <FadeIn>
                            <ContactN/>
                        </FadeIn>              
                        <FooterN/>
              
            </React.Fragment >
        );
    }
}