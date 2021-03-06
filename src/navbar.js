import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import EnFr from "./enFr.js";
import { withTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";

import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        if (window.screen.width > 450) {
            var hide = this;
            window.addEventListener("scroll", this.handleScroll);
            hide.handleScroll();
        } else {
            var navElement = document.getElementById("appear");
            navElement.classList.add("mobileNavBar");
        }
    }

    handleScroll() {
        var element = document.getElementById("appear");
        if (window.pageYOffset <= 20) {
            element.classList.add("isVisible");
            element.classList.remove("notVisible");
        } else {
            element.classList.remove("isVisible");
            element.classList.add("notVisible");
        }
    }

    handleHover() {
        var element = document.getElementById("appear");
        if (window.pageYOffset >= 20) {
            element.classList.add("isVisible");
            element.classList.remove("notVisible");
        }
    }

    handleLeave() {
        var element = document.getElementById("appear");
        if (window.pageYOffset >= 20 && window.screen.width > 450) {
            element.classList.remove("isVisible");
            element.classList.add("notVisible");
        }
    }
    closeNav() {
        document.getElementsByClassName("navbarCollapse")[0];
        this.setState({
            visible: !this.state.visible
        })

    }




    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <Container fluid className="pb-0 pt-4" id="navContainer">
                    <div id="appear" onScroll={() => this.handleScroll()} onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.handleLeave()}>
                        <Navbar collapseOnSelect id="mobileNav" expand="lg" bg="white" color="black" fixed="top" className="navbar" >
                            <Navbar.Brand className="pl-2 pt-0">
                                <Link to="Home"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    className="pr-3 pt-3"
                                    data-toggle="collapse"
                                    data-target=".navbarCollapse"

                                >
                                    <Image src="./assets/BlackTiger.png" width="50" height="50" />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="navbarCollapse">
                                <Nav className="mr-auto pt-1 " id="navCur">
                                    <Link to="About"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}
                                        className="pr-3 pt-3"
                                        data-toggle="collapse"
                                        data-target=".navbarCollapse"

                                    >
                                        {t("About")}
                                    </Link>
                                    <Link to="Projects"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={800}
                                        className="pr-3 pt-3"
                                        data-toggle="collapse"
                                        data-target=".navbarCollapse"
                                    >{t("Projects")}
                                    </Link>
                                    <Link to="Volunteering"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={1100} className="pr-3 pt-3"
                                        data-toggle="collapse"
                                        data-target=".navbarCollapse"
                                        data-toggle="collapse"
                                        data-target=".navbarCollapse">{t("Volunteering")}
                                    </Link>
                                    <Link to="ContactN"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={1400} className="pr-3 pt-3"
                                        data-toggle="collapse"
                                        data-target=".navbarCollapse"
                                    >{t("Contact")}
                                    </Link>
                                </Nav>
                                <EnFr />
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default withTranslation()(Header);

Header.propTypes = {
    t: PropTypes.func
};