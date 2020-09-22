import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { withTranslation } from "react-i18next";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

class ProjectCard extends React.Component {

    constructor() {
        super();
        this.state = {
            [0]: {
                arrowDown: true,
                arrowUp: false,
                arrowTechDown: true,
                arrowTechUp: false
            },

            [1]: {
                arrowDown: true,
                arrowUp: false,
                arrowTechDown: true,
                arrowTechUp: false
            },
            [2]: {
                arrowDown: true,
                arrowUp: false,
                arrowTechDown: true,
                arrowTechUp: false
            }
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickTech = this.handleClickTech.bind(this);
    }

    handleClick(event, index) {
        event.preventDefault();
        this.setState({
            [index]: {
                arrowDown: !this.state[index].arrowDown,
                arrowUp: !this.state[index].arrowUp,
                arrowTechDown: this.state[index].arrowTechDown,
                arrowTechUp: this.state[index].arrowTechUp
            }
        }
        );
    }

    handleClickTech(event, index) {
        event.preventDefault();
        this.setState({
            [index]: {
                arrowTechDown: !this.state[index].arrowTechDown,
                arrowTechUp: !this.state[index].arrowTechUp,
                arrowDown: this.state[index].arrowDown,
                arrowUp: this.state[index].arrowUp
            }
        }
        );
    }

    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <Container fluid className="0" id="Projects">
                    <Row className="d-flex justify-content-center pt-5" xs={1} md={1} lg={3}>
                        {this.props.projects.map((project, index) =>
                            <Col className="d-flex justify-content-center px-5 py-5" key={project.keyP}>
                                <Card className="bg-warning" border="light" >
                                    <Card.Img variant="top" src={project.srcP} className="overlay" />
                                    <Card.Body className="bg-light">
                                        <Card.Title className="text-warning" >{t(project.titleP)}</Card.Title>
                                        <Card.Text>
                                            {t(project.descriptionP)}
                                        </Card.Text>
                                        <Accordion>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0" id="featureP" onClick={(event) => { this.handleClick(event, index); }} >
                                                <Card.Title className="text-warning" >
                                                    Features
                                                    {this.state[index].arrowDown &&

                                                        <svg id={project.idP2}
                                                            width="1em" height="1em" viewBox="0 0 16 16" className=" down bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                                            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                        </svg>
                                                    }
                                                    {this.state[index].arrowUp &&
                                                        <svg id={project.idP3} width="1em" height="1em" viewBox="0 0 16 16" className=" up bi bi-chevron-double-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                                            <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                                                            <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                                                        </svg>
                                                    }
                                                </Card.Title>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Text className="mb-3">
                                                    {project.featuresP.map((element, index) =>
                                                        <li key={project[index]}> {element}</li>
                                                    )}
                                                </Card.Text>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <Accordion>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0" id="technologiesP" onClick={(event) => { this.handleClickTech(event, index); }} >
                                                <Card.Title className="text-warning">
                                                    Technologies
                                                    {this.state[index].arrowTechDown &&
                                                        <svg id={project.idP4} width="1em" height="1em" viewBox="0 0 16 16" className=" down bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                                            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                        </svg>
                                                    }
                                                    {this.state[index].arrowTechUp &&
                                                        <svg id={project.idP5} width="1em" height="1em" viewBox="0 0 16 16" className=" up bi bi-chevron-double-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                                            <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                                                            <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                                                        </svg>
                                                    }
                                                </Card.Title>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Row className="mb-3">
                                                    <Col>
                                                        <Card.Text className="font-weight-bold">Front-End
                                                        </Card.Text>
                                                        {project.technologiesFEP.map((element, index) =>
                                                            <li key={project[index + 1]}>{element}</li>
                                                        )}
                                                    </Col>
                                                    <Col>
                                                        <Card.Text className="font-weight-bold">Back-End</Card.Text>
                                                        {project.technologiesBEP.map((element, index) =>
                                                            <li key={project[index + 1]}>{element}</li>
                                                        )}
                                                    </Col>
                                                </Row>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <Row className="pl-3">
                                            <a href={project.hrefGitHubP} target="_blank" className="text-dark" rel="noopener noreferrer">
                                                <svg id="down" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                                                </svg>
                                                    Github
                                            </a>
                                        </Row>
                                        <Row className="pl-3">
                                            <a href={project.hrefHerokuP} target="_blank" className="text-dark" rel="noopener noreferrer">
                                                <svg id="up" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                                                </svg>{project.heroku}</a>
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

export default withTranslation()(ProjectCard);

ProjectCard.propTypes = {
    t: PropTypes.func,
    projects: PropTypes.array,
    project: PropTypes.object
};

// find project.map proptypes