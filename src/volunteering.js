import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
// import PropTypes from 'prop-types';

class Volunteer extends React.Component {

constructor() {
    super();
    this.state = {

    }
}


render () {
return (
    <React.Fragment>
        <Container fluid className=" pb-5" id="Volunteering">
            <h1 className="display-1 title pt-5">Volunteering</h1>

            <Row xs={1} md={1} lg={2}>
  
                <Col className="d-flex justify-content-center">
                    <Card.Body >
                        <Card.Title className="display-4 pt-5 pl-5">OpenTechSchool Berlin</Card.Title>
                        <Card.Text className="text-justify px-5">
                            I’m Edith. A fullstack developer based in Berlin, but available worldwide. I speak Javascript, HTML, CSS, vue.js,
                            React.js, english, french and sufficient german (ein bier bitte).
                            I’m a quick learner eager to master the tangle of Javascript in a silk CSS wrap. Currently exploring
                            in-depth frameworks like vue.js and with a huge crush on React.js, I as well appreciate working with bootstrap.
                                </Card.Text>
                    </Card.Body>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Image src="./fish.png"/>
                </Col>
            </Row>

            <Row  >

                <Col className="d-flex justify-content-center">
                    <Card.Body >
                        <Card.Title className="display-4 pt-5 pl-5">VGG Garden - Nkln</Card.Title>
                        <Card.Text className="text-justify px-5">
                            I’m Edith. A fullstack developer based in Berlin, but available worldwide. I speak Javascript, HTML, CSS, vue.js,
                            React.js, english, french and sufficient german (ein bier bitte).
                            I’m a quick learner eager to master the tangle of Javascript in a silk CSS wrap. Currently exploring
                            in-depth frameworks like vue.js and with a huge crush on React.js, I as well appreciate working with bootstrap.
                                </Card.Text>
                    </Card.Body>
                </Col>
                <Col lg={{ order: 'first' }} className="d-flex justify-content-center">
                    <Image src="./Leave.png" />
                </Col>
            </Row>

            <Row xs={1} md={1} lg={2} >

                <Col className="d-flex justify-content-center">
                    <Card.Body >
                        <Card.Title className="display-4 pt-5 pl-5">Activism </Card.Title>
                        <Card.Text className="text-justify px-5">
                            I’m Edith. A fullstack developer based in Berlin, but available worldwide. I speak Javascript, HTML, CSS, vue.js,
                            React.js, english, french and sufficient german (ein bier bitte).
                            I’m a quick learner eager to master the tangle of Javascript in a silk CSS wrap. Currently exploring
                            in-depth frameworks like vue.js and with a huge crush on React.js, I as well appreciate working with bootstrap.
                                </Card.Text>
                    </Card.Body>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Image src="./leopard.png" />
                </Col>
            </Row>

        </Container>
    </React.Fragment>
)

}





}

export default Volunteer;