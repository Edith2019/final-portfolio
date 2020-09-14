import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ProjectCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid className=" pb-5" id="Projects">
                    <Row className="d-flex justify-content-center px-5 py-5" xs={1} md={1} lg={3}>
                        {this.props.projects.map(project => (
                            <Col className="d-flex justify-content-center px-5 py-5" key={project.key}>
                                <Card className="bg-warning" border="light" >
                                    <Card.Img variant="top" src="./Swork.png" className="overlay" />
                                    <Card.Body className="bg-light">
                                        <Card.Title >{project.title}</Card.Title>
                                        <Card.Text>
                                            {project.description}
                                        </Card.Text>
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

export default ProjectCard;