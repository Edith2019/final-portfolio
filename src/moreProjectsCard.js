import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { withTranslation } from 'react-i18next';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

class MoreProjectsCard extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <Container fluid className=" pb-5" id="Projects">
                    <Row className="d-flex justify-content-center py-5" xs={1} md={1} lg={3}>
                        {this.props.moreProjects.map(moreProject => (
                            <Col className="d-flex justify-content-center px-5 py-5" key={moreProject.keyMP}>
                                <Card className="bg-warning" border="light" >
                                    <Card.Img variant="top" src={moreProject.srcMP} className="overlay" />
                                    <Card.Body className="bg-light">
                                        <Card.Title className="text-warning" >{t(moreProject.titleMP)}</Card.Title>
                                        <Card.Text>
                                            {t(moreProject.descriptionMP)}
                                        </Card.Text>
                                        <Accordion>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0" id="featureP">
                                                <Card.Title className="text-warning" >
                                                    Features <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                        <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                    </svg>
                                                </Card.Title>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className="mb-3">
                                                    {moreProject.featuresMP.map(element => (
                                                        <li> {element}</li>
                                                    ))}
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <Accordion>
                                            <Card.Text>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0" id="technologiesP">
                                                    <Card.Title className="text-warning">Technologies <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                        <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                    </svg></Card.Title>

                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <Row className="mb-3">
                                                        <Col>
                                                            <Card.Text className="font-weight-bold">Front-End</Card.Text >
                                                            {moreProject.technologiesFEMP.map((element, index) => (
                                                                <li key={element[index]}>{element}</li>
                                                            ))}
                                                        </Col>
                                                        <Col>
                                                            <Card.Text className="font-weight-bold">Back-End</Card.Text >
                                                            {moreProject.technologiesBEMP.map((element, index) => (
                                                                <li key={element[index]} > { element}</li>
                                                            ))}
                                                        </Col>
                                                    </Row>
                                                </Accordion.Collapse>
                                            </Card.Text>
                                        </Accordion>
                                        {/* <Card.Text> */}
                                        {/* <Card.Text className="mb-1"> */}
                                        <a href={moreProject.hrefGitHubMP} target="_blank" className="text-dark" rel="noopener noreferrer">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                                            </svg>
                                                    Github
                                                </a>
                                        {/* </Card.Text> */}
                                        {/* <Card.Text > */}
                                        <a href={moreProject.hrefHerokuMP} target="_blank" className="text-dark" rel="noopener noreferrer">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                                            </svg>{moreProject.herokuMP}</a>
                                        {/* </Card.Text> */}
                                        {/* </Card.Text> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container >

            </React.Fragment >
        )
    }
}

export default (withTranslation()(MoreProjectsCard));