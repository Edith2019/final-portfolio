import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'
import FileSaver from 'file-saver';
import saveAs from 'file-saver'
// import MyPDF from '../public/Resume.pdf';
import { Link } from "react-scroll";
// import PropTypes from 'prop-types';


class About extends React.Component {
    constructor() {
        super();
        // this.downloadResume = this.downloadResume.bind(this);
        this.state = {

        }


    }


    downloadResume() {

        FileSaver.saveAs(
            process.env.REACT_APP_CLIENT_URL + "./Resume.pdf",
            "Edith_Chevallier_Resume.pdf",
            { autoBom: true });

    }

    // try {
    //     var isFileSaverSupported = !!new Blob;
    // } catch (e) { }


    render() {


        return (

            <React.Fragment>
                <Container fluid className=" pb-5" id="About">

                    <h1 className="display-1 title pt-5">About</h1>
                    <Row xs={1} md={1} lg={2} >
                        <Col lg={{ order: 'first' }} className="d-flex justify-content-center " >
                            <Image className="pt-5" src="./Edith.png" />
                        </Col>
                        <Col sm={{ order: 'first' }} >
                            <Card.Body >
                                <Card.Title className="display-3 pt-5 pl-5">Hi,</Card.Title>
                                <Card.Text className="text-justify px-5">
                                    I’m Edith. A fullstack developer based in Berlin, but available worldwide. I speak Javascript, HTML, CSS, vue.js,
                                    React.js, english, french and sufficient german (ein bier bitte).
                                    I’m a quick learner eager to master the tangle of Javascript in a silk CSS wrap. Currently exploring
                                    in-depth frameworks like vue.js and with a huge crush on React.js, I as well appreciate working with bootstrap.
                                </Card.Text>
                            </Card.Body>
                        </Col>


                        <Col className="d-flex justify-content-center">
                            <Card className="border-0 text-center pb-4" style={{ width: '25rem' }} >
                                <Card.Title className="display-3 pt-5">Languages</Card.Title>
                                <Row className=" pt-5">
                                    <Col >
                                        <Accordion>
                                            <Card.Title >Front-End</Card.Title>

                                            <Accordion.Toggle as={Card.Title} eventKey="0" >

                                                <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-chevron-compact-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                                                </svg>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body >
                                                    <Card.Text>Javascript</Card.Text>
                                                    <Card.Text>CSS</Card.Text>
                                                    <Card.Text>HTML</Card.Text>
                                                    <Card.Text>React.js (Redux)</Card.Text>
                                                    <Card.Text>Vue.js </Card.Text>
                                                    <Card.Text>Boostrap</Card.Text>


                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Accordion>
                                    </Col>

                                    <Col >
                                        <Accordion >
                                            <Card.Title >Back-End</Card.Title>
                                            <Accordion.Toggle as={Card.Title} eventKey="0" >

                                                <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-chevron-compact-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                                                </svg>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body >
                                                    <Card.Text>Node.js</Card.Text>
                                                    <Card.Text>Express</Card.Text>
                                                    <Card.Text>PostgreSQL</Card.Text>
                                                    <Card.Text>AWS (S3 and SES)</Card.Text>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Accordion>
                                    </Col>
                                </Row>
                            </Card>

                        </Col>
                        <Col className="text-center px-5" >
                            <Image src="Bird.png" />
                            <Link to="ContactN"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={1400}>

                                <Button variant="warning" size="lg" block>Contact</Button>
                            </Link>
                            <a href="public/Edith_Chevallier-Resume.pdf" download >
                                <Button variant="outline-warning" size="lg" className="mt-2" block >Download Resume</Button>
                            </a>


                            {/* <a href={myPDF} download="./Resume.pdf"> Download Here </a> */}


                        </Col>


                    </Row>

                    {/* <img src="./Resume.pdf" /> */}



                </Container>

            </React.Fragment>

        );
    }



}

export default About;

