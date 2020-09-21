import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { Link } from "react-scroll";
import { withTranslation } from 'react-i18next';

class About extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <Container fluid className=" pb-5" id="About">
                    <Row>
                        <h1 className="display-1 title pt-5">{t("About")}</h1>
                    </Row>
                    <Row xs={1} md={1} lg={2} >
                        <Col lg={{ order: 'first' }} className="d-flex justify-content-center " >
                            <Image className="pt-5" src=".././assets/Edith.png" fluid alt="Responsive image" />
                        </Col>
                        <Col sm={{ order: 'first' }} >
                            <Row>
                                <Card.Body >
                                    <Card.Title className="display-3 pt-5 pl-5">{t("Hi")}</Card.Title>
                                    <Card.Text className="text-justify px-5">
                                        {t("AboutDesc")}
                                    </Card.Text>
                                </Card.Body>
                            </Row>
                            <Row className="px-5 pt-5 d-flex justify-content-around">
                                <a href="https://github.com/Edith2019" rel="noopener noreferrer" target="_blank">
                                    <Image src="./assets/GitHub1.png" />
                                </a>
                                <a href="https://www.linkedin.com/in/edith-chevallier/" rel="noopener noreferrer" target="_blank">
                                    <Image src="./assets/Link.png" /></a>
                            </Row>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <Card className="border-0 text-center pb-4" style={{ width: '25rem' }} >
                                <Card.Title className="display-3 pt-5">{t("Languages")}</Card.Title>
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
                            <Image src="/assets/Bird.png" fluid alt="Responsive image" />
                            <Link to="ContactN"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={1400}>
                                <Button variant="warning" size="lg" block>Contact</Button>
                            </Link>
                            <a href="public/Edith_Chevallier-Resume.pdf" download id="downloadA" rel="noopener noreferrer">
                                <Button variant="outline-warning" size="lg" className="mt-2 download" block >{t("DR")}</Button>
                            </a>
                        </Col>
                    </Row>
                </Container >
            </React.Fragment >
        );
    }
}

export default (withTranslation()(About));

