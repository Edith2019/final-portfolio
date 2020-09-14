import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { withTranslation } from 'react-i18next';

class MoreProjectsCard extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <Container fluid className=" pb-5" id="Projects">
                    <Row className="d-flex justify-content-center px-5 " xs={1} md={1} lg={3} >
                        {this.props.moreProjects.map(moreProject => (
                            <Col className="d-flex justify-content-center px-5 py-5" key={moreProject.keyMP} >
                                <Card className="bg-warning" border="light" >
                                    <Card.Img variant="top" src={moreProject.srcMP} className="overlay" />
                                    <Card.Body className="bg-light">
                                        <Card.Title>{t(moreProject.titleMP)}</Card.Title>
                                        <Card.Text>
                                            {t(moreProject.descriptionMP)}
                                        </Card.Text>
                                        <Col>
                                            <a href={moreProject.hrefGitHubMP} target="_blank">Github</a>
                                        </Col>
                                        <Col>
                                            <a href={moreProject.hrefHerokuMP} target="_blank"> {moreProject.herokuMP}</a>
                                        </Col>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </React.Fragment >
        )
    }
}

export default (withTranslation()(MoreProjectsCard));