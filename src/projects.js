import React from 'react';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Media from 'react-bootstrap/Media'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import Dropdown from 'react-bootstrap/Dropdown'
import {cardProjects} from './js/projectsData.js'
import PropTypes from 'prop-types';
// 

class Projects extends React.Component {

constructor(props) {

// super(props);
super(props);
this.toggleHand = this.toggleHand.bind(this);
this.state= {
isVisible: true,
cardsArr:[],


};
    console.log("this.props", this.props)
    console.log("this.state", this.state)


}

componentDidMount() {
    var hide = this;
    window.addEventListener('click', this.toggleHand);
    hide.toggleHand();

   
}

toggleHand() {
const {isVisible} = this.state;
this.setState({
    isVisible : !isVisible
})


}






render() {

var {title} = this.props;
const {isVisible} = this.state;
// var {key} = this.props.key;
if(isVisible) {

title = "More projects"

} else {
title = "Close"

}



    const elements = ['one', 'two', 'three'];

    // console.log("this.state.cardProjects", this.props.cardProjects)
    return(
        <React.Fragment>
            <Container fluid className=" pb-5" id="Projects">

              
                                  
                        <h1 className="display-1 ffont-weight-normal title pt-5" >Projects</h1>
                <ul>
                    {elements.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
                  
                <Row className="d-flex justify-content-center px-5 py-5" xs={1} md={1} lg={3}>
                            <Col className="d-flex justify-content-center px-5 py-5" >
                            <Card className="bg-warning" border="light" >
                                <Card.Img variant="top" src="./Swork.png" className="overlay" />
                                <Card.Body className="bg-light">
                                <Card.Title >Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                    <Col className="d-flex justify-content-center  px-5 py-5">
                                <Card className="bg-warning " border="light" >
                                    <Card.Img variant="top" src="./Swork.png" className="overlay" />
                                    <Card.Body className="bg-light">
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                    <Col className="d-flex justify-content-center px-5 py-5">
                                <Card className="bg-warning" border="light" >
                                    <Card.Img variant="top" src="./Swork.png" className="overlay" />
                                    <Card.Body className="bg-light">
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    
                   
           
                <Row className="d-flex justify-content-center px-3">
                    <Accordion >

                        <Accordion.Collapse eventKey="0">
                            <Row className="d-flex justify-content-center px-5 " xs={1} md={1} lg={3}>
                                <Col className="d-flex justify-content-center px-5 py-5" >
                                    <Card className="bg-warning" border="light" >
                                        <Card.Img variant="top" src="./Swork.png" className="overlay" />
                                        <Card.Body className="bg-light">
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="d-flex justify-content-center  px-5 py-5">
                                    <Card className="bg-warning " border="light" >
                                        <Card.Img variant="top" src="./Swork.png" className="overlay" />
                                        <Card.Body className="bg-light">
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="d-flex justify-content-center px-5 py-5">
                                    <Card className="bg-warning" border="light" >
                                        <Card.Img variant="top" src="./Swork.png" className="overlay" />
                                        <Card.Body className="bg-light">
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                </Row>
                        </Accordion.Collapse>
                        <Row className="d-flex justify-content-center">
                            
                        <Accordion.Toggle as={Button} variant="warning" eventKey="0" onClick={this.toggleHand} >
                            {title}
                            </Accordion.Toggle>
                           
                        </Row>
                    </Accordion>

                </Row>

                {isVisible && (
                <Row className="d-flex justify-content-center">
                    <Image src="./handUp.png" className="pt-5 pl-5" />
                </Row>
                )}
            

        </Container>


        </React.Fragment>
    )
}

}

// Projects.ContextTypes = {

//     title: PropTypes.string,
//     toggleHand: PropTypes.func,
//     isVisible: PropTypes.bool,
//     props: cardProjects.deprecated(PropTypes.object)


// }


export default Projects;