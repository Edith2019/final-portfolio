import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-scroll";

// import "bootstrap/dist/css/bootstrap.min.css";


class Header extends React.Component {

constructor(props) {

super(props);
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
       
        visible: true,
    };

    


}
   
    componentDidMount() {
        var hide = this;
        window.addEventListener('scroll', this.handleScroll);
        hide.handleScroll();
    };


    handleScroll(){

        if(window.pageYOffset >= 15) {
            console.log("something")
            this.setState ({
                 visible: false
            })

        } else {
            this.setState({
                visible: true
            })
        }

    }



render () {
    const visible = this.state.visible;
    return(

        <React.Fragment>
            {/* <div> */}
            {visible && (
            <div className="NavBar" onScroll={() => this.handleScroll()}>
            <Navbar collapseOnSelect expand="lg"  bg="white" color="black" fixed="top" className="mb-5 pb-5 navbar" >
                <Navbar.Brand href="#home">Edith</Navbar.Brand>
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
                        
                        <il>EN </il>
                        <il>/ FR</il>
                       
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

export default Header;