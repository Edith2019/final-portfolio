import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { withTranslation } from 'react-i18next';

class ProjectCard extends React.Component {
    render() {
        const { t } = this.props
        return (
            <React.Fragment>
                <Container fluid className=" pb-5" id="Projects">
                    <Row className="d-flex justify-content-center px-5 py-5" xs={1} md={1} lg={3}>
                        {this.props.projects.map(project => (
                            <Col className="d-flex justify-content-center px-5 py-5" key={project.keyP}>
                                <Card className="bg-warning" border="light" >
                                    <Card.Img variant="top" src={project.srcP} className="overlay" />
                                    <Card.Body className="bg-light">
                                        <Card.Title >{t(project.titleP)}</Card.Title>
                                        <Card.Text>
                                            {t(project.descriptionP)}
                                        </Card.Text>
                                        <Col>
                                            <a href={project.hrefGitHubP} target="_blank">Github</a>
                                        </Col>
                                        <Col>
                                            <a href={project.hrefHerokuP} target="_blank">{project.heroku}</a>
                                        </Col>

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

export default (withTranslation()(ProjectCard));