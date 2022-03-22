import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import FileSaver from "file-saver";
import { Link } from "react-scroll";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import FadeIn from "./hooks/fadeIn.js";

class About extends React.Component {

    downloadResume() {

        FileSaver.saveAs(
            process.env.REACT_APP_CLIENT_URL + "./Resume.pdf",
            "Edith_Chevallier_Resume.pdf",
            { autoBom: true });
    }

    languageList() {
        return {
            frontEnd: ['Javascript', 'CSS/ PostCSS/ SCSS', 'HTML 5', 'React.js', 'Vue.js / Nuxt.js/ VSF', 'Boostrap', 'Buefy', 'vue formulate'],
            backEnd: ['Node.js', 'Express', 'PostgreSQL', 'AWS (S3 and SES)']
        }
    }
    render() {
        const languageList = this.languageList()
        const { t } = this.props;
        return (

            <React.Fragment>
                <Container fluid id="About">
                    <FadeIn>
                        <h1 className="display-1 title">{t("About")}</h1>

                        <Row xs={1} md={1} lg={2} >
                            <Col lg={{ order: "first" }} className="d-flex justify-content-center " >
                                <Image className="pt-5" src=".././assets/Edith.png" fluid alt="Responsive image" />
                            </Col>
                            <Col sm={{ order: "first" }} >
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
                                        <Image src=".././assets/GitHub1.png" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/edith-chevallier/" rel="noopener noreferrer" target="_blank">
                                        <Image src=".././assets/Link.png" /></a>

                                </Row>
                            </Col>

                            <Col className="d-flex justify-content-center">
                                <Card className="border-0 text-center pb-4" style={{ width: "25rem" }} >
                                    <Card.Title className="display-3 pt-5">{t("Languages")}</Card.Title>
                                    <Row className=" pt-5">
                                        {Object.entries(languageList).map((items, index) =>
                                            <Col key={index}>
                                                <Accordion>
                                                    <Card.Title >{t(items[0])}</Card.Title>

                                                    <Accordion.Toggle as={Card.Title} eventKey="0" >

                                                        <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-chevron-compact-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                                                        </svg>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="0">
                                                        <Card.Body >
                                                            {items[1].map((item, index) =>
                                                                <Card.Text key={index + 1}>{item}</Card.Text>
                                                            )}
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Accordion>
                                            </Col>
                                        )}
                                    </Row>
                                </Card>

                            </Col>
                            <Col className="text-center px-5" >
                                <Image src=".././assets/Bird.png" fluid alt="Responsive image" />
                                <Link to="ContactN"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={1400}>

                                    <Button variant="warning" size="lg" block>Contact</Button>
                                </Link>
                                <a href="public/assets/Edith_Chevallier_Resume.pdf" download id="downloadA" rel="noopener noreferrer">
                                    <Button variant="outline-warning" size="lg" className="mt-2 download" block >{t("DR")}</Button>
                                </a>

                            </Col>

                        </Row>
                    </FadeIn>
                </Container >

            </React.Fragment >

        );
    }

}

export default withTranslation()(About);

About.propTypes = {
    t: PropTypes.func
};