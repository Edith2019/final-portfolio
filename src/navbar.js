import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";
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
        var hide = this;
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('mouseenter', this.handleHover);
        // window.addEventListener('mouseleave', this.handleLeave);
        hide.handleScroll();
        // hide.handleHover();
        // hide.handleLeave();

    };


    handleScroll(){

        if(window.pageYOffset <= 15) {
            this.setState ({
                 visible: true
            })

        } else {
            this.setState({
                visible: false
            })
        }
    };

handleHover(){
    console.log("something mouse")

    this.setState({
        visible: true
    })
}

// handleLeave(){

//     this.setState({
//         visible: false
//     })

    // 

   
render () {
    const visible = this.state.visible;
    // const over = this.state.over;
    console.log("this.state.visible", this.state.visible)
    return(

        <React.Fragment>
            {/* <div> */}
            {visible && (
                <div id="aboutcont" className="NavBar" onScroll={() => this.handleScroll()} onMouseEnter={() => this.handleHover()} >
                    <Navbar collapseOnSelect expand="lg" bg="white" color="black" fixed="top" className="navbar" >
                <Navbar.Brand href="#home" >Edith</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto pt-1" >
                    {/* <Nav.Link href="#About" > */}
                                    <Link to="About"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                        className="pr-3">About
                                    </Link>
                        {/* About</Nav.Link> */}
                    {/* <Nav.Link href="#Projects">Projects</Nav.Link> */}
                                <Link to="Projects"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={800}
                                    className="pr-3">Projects
                                    </Link>

                    {/* <Nav.Link href="#Volunteering">Volunteering</Nav.Link> */}

                                <Link to="Volunteering"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={1100} className="pr-3">Volunteering
                                    </Link>

                    {/* <Nav.Link href="#ContactN">Contact</Nav.Link> */}
                                <Link to="ContactN"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={1400} className="pr-3">Contact
                                    </Link>

                </Nav>

                            <Nav className="justify-content-end" as="ul">
                    <Navbar.Text>
                        
                        <li>EN </li>
                        <li>/ FR</li>
                       
                    </Navbar.Text>
                </Nav>
                    </Navbar.Collapse>
            </Navbar>
            </div>
            )}
            {/* </div> */}
        </React.Fragment>
    )
}

}


// Header.ContextTypes = {




// }
export default Header;