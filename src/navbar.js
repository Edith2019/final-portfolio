import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";
import EnFr from './enFr.js';
import { withTranslation } from 'react-i18next';
import Container from "react-bootstrap/Container";

// import PropTypes from 'prop-types';

// import "bootstrap/dist/css/bootstrap.min.css";


class Header extends React.Component {

    constructor(props) {

        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleHover = this.handleHover.bind(this);
        // this.handleLeave = this.handleLeave.bind(this)
        this.state = {

            visible: false,
            // over: false,
        };




    }

    componentDidMount() {

        if (window.screen.width > 450) {
            var hide = this;
            window.addEventListener('scroll', this.handleScroll);
            hide.handleScroll();
        } else {
            var navElement = document.getElementById("appear")
            navElement.classList.add("mobileNavBar")
        }


    };


    handleScroll() {
        var element = document.getElementById("appear");
        if (window.pageYOffset <= 20) {
            element.classList.add("isVisible")
            element.classList.remove("notVisible")

        } else {
            element.classList.remove("isVisible")
            element.classList.add("notVisible")

        }
    };

    handleHover() {
        var element = document.getElementById("appear");
        if (window.pageYOffset >= 20) {
            element.classList.add("isVisible")
            element.classList.remove("notVisible")
        }
    }


    handleLeave() {
        var element = document.getElementById("appear");
        if (window.pageYOffset >= 20) {
            element.classList.remove("isVisible")
            element.classList.add("notVisible")
        }

    }


    render() {
        const visible = this.state.visible;
        const { t } = this.props;
        return (

            <React.Fragment>
                <Container fluid className="pb-0 pt-4">
                    <div id="appear" onScroll={() => this.handleScroll()} onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.handleLeave()}>
                        <Navbar id="mobileNav" collapseOnSelect expand="lg" bg="white" color="black" fixed="top" className="navbar" >
                            <Navbar.Brand href="#home" className="pl-2 pt-4">Edith</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto pt-1 " id="navCur">
                                    <Link to="About"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                        className="pr-3 pt-3">{t("About")}
                                    </Link>
                                    <Link to="Projects"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={800}
                                        className="pr-3 pt-3">{t("Projects")}
                                    </Link>
                                    <Link to="Volunteering"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={1100} className="pr-3 pt-3">{t("Volunteering")}
                                    </Link>
                                    <Link to="ContactN"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={1400} className="pr-3 pt-3">{t("Contact")}
                                    </Link>
                                </Nav>
                                <EnFr />
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    {/* )}
                </div> */}
                </Container>
            </React.Fragment>
        )
    }

}

export default (withTranslation()(Header));