import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { withTranslation } from "react-i18next";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

class MoreProjectsCard extends React.Component {

    constructor() {
        super();
        this.state = {
            [0]: {
                arrowDownMP: true,
                arrowUpMP: false,
                arrowTechDownMP: true,
                arrowTechUpMP: false
            },

            [1]: {
                arrowDownMP: true,
                arrowUpMP: false,
                arrowTechDownMP: true,
                arrowTechUpMP: false
            },
            [2]: {
                arrowDownMP: true,
                arrowUpMP: false,
                arrowTechDownMP: true,
                arrowTechUpMP: false
            }
        };
        this.handleClickMP = this.handleClickMP.bind(this);
        this.handleClickTechMP = this.handleClickTechMP.bind(this);
    }

    handleClickMP(event, index) {
        event.preventDefault();
        this.setState({
            [index]: {
                arrowDownMP: !this.state[index].arrowDownMP,
                arrowUpMP: !this.state[index].arrowUpMP,
                arrowTechDownMP: this.state[index].arrowTechDownMP,
                arrowTechUpMP: this.state[index].arrowTechUpMP
            }
        }
        );
    }

    handleClickTechMP(event, index) {
        event.preventDefault();
        this.setState({
            [index]: {
                arrowTechDownMP: !this.state[index].arrowTechDownMP,
                arrowTechUpMP: !this.state[index].arrowTechUpMP,
                arrowDownMP: this.state[index].arrowDownMP,
                arrowUpMP: this.state[index].arrowUpMP
            }
        }
        );
    }

    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <Container fluid className=" pb-5" id="Projects">
                    <Row className="d-flex justify-content-center py-5" xs={1} md={1} lg={3}>
                        {this.props.moreProjects.map((moreProject, index) => 
                            <Col className="d-flex justify-content-center px-5 py-5" key={moreProject.keyMP}>
                                <Card className="bg-warning" border="light" >
                                    <Card.Img variant="top" src={moreProject.srcMP} className="overlay" />
                                    <Card.Body className="bg-light">
                                        <Card.Title className="text-warning" >{t(moreProject.titleMP)}
                                        </Card.Title>
                                        <Card.Text>
                                            {t(moreProject.descriptionMP)}
                                        </Card.Text>
                                        <Accordion>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0" id="featureP" onClick={(event) => { this.handleClickMP(event, index); }}>
                                                <Card.Title className="text-warning" >
                                                    Features                                      {this.state[index].arrowDownMP &&
                                                        <svg id={moreProject.idMP2} width="1em" height="1em" viewBox="0 0 16 16" className=" down bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                        </svg>
                                                    }
                                                    {this.state[index].arrowUpMP &&
                                                        <svg id={moreProject.idMP3} width="1em" height="1em" viewBox="0 0 16 16" className=" up bi bi-chevron-double-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                                            <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                                                            <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                                                        </svg>
                                                    }
                                                </Card.Title>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Text className="mb-3">
                                                    {moreProject.featuresMP.map(element => 
                                                        <li> {element}</li>
                                                    )}
                                                </Card.Text>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <Accordion>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0" id="technologiesP" onClick={(event) => { this.handleClickTechMP(event, index); }}>
                                                <Card.Title className="text-warning">
                                                    Technologies
                                                    {this.state[index].arrowTechDownMP &&
                                                        <svg id={moreProject.idMP4} width="1em" height="1em" viewBox="0 0 16 16" className=" down bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                        </svg>
                                                    }
                                                    {this.state[index].arrowTechUpMP &&
                                                        <svg id={moreProject.idMP5} width="1em" height="1em" viewBox="0 0 16 16" className=" up bi bi-chevron-double-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                                            <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                                                            <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                                                        </svg>
                                                    }
                                                </Card.Title>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Row className="mb-3">
                                                    <Col>
                                                        <Card.Text className="font-weight-bold">Front-End</Card.Text >
                                                        {moreProject.technologiesFEMP.map((element, index) => 
                                                            <li key={moreProject[index + 1]}>{element}</li>
                                                        )}
                                                    </Col>
                                                    <Col>
                                                        <Card.Text className="font-weight-bold">Back-End</Card.Text >
                                                        {moreProject.technologiesBEMP.map((element, index) => 
                                                            <li key={moreProject[index + 1]} > {element}</li>
                                                        )}
                                                    </Col>
                                                </Row>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <Row className="pl-3">
                                            <a href={moreProject.hrefGitHubMP} target="_blank" className="text-dark" rel="noopener noreferrer">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                                                </svg>
                                                    Github
                                            </a>
                                        </Row>
                                        <Row className="pl-3">
                                            <a href={moreProject.hrefHerokuMP} target="_blank" className="text-dark" rel="noopener noreferrer">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                                                </svg>{moreProject.herokuMP}</a>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Container >
            </React.Fragment >
        );
    }
}

export default withTranslation()(MoreProjectsCard);

MoreProjectsCard.propTypes = {
    t: PropTypes.func,
    moreProjects: PropTypes.array,
    moreProject: PropTypes.object
};