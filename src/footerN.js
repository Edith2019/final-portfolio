import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import PropTypes from 'prop-types';




class FooterN extends React.Component {
constructor() {
    super();
    this.state = {

    }
}


render() {

    return (
        <React.Fragment>
       
                <Nav className="justify-content-center bg-warning pt-5" id="footerN">
                <Nav.Item className="pr-5 mr-5">
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                <Nav.Item className="pl-5 ml-5">
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
    </Nav>            
        </React.Fragment>
    )
}



}

export default FooterN;