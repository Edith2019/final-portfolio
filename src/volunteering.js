import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import FadeIn from "./hooks/fadeIn.js";

class Volunteer extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <Container fluid id="Volunteering">
                    <FadeIn>
                        <h1 className="display-1 title">{t("Volunteering")}</h1>
                        <Row xs={1} md={1} lg={2}>
                            <Col className="d-flex justify-content-center">
                                <Card.Body>
                                    <Card.Title className="display-4 pt-5 pl-5">{t("titleV1")}</Card.Title>
                                    <Card.Text className="text-justify px-5">
                                        {t("descriptionV1")}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <Image src=".././assets/Fish.png" fluid alt="Responsive image" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Card.Body>
                                    <Card.Title className="display-4 pt-5 pl-5">{t("titleV2")}</Card.Title>
                                    <Card.Text className="text-justify px-5">
                                        {t("descriptionV2")}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col lg={{ order: "first" }} className="d-flex justify-content-center">
                                <Image src=".././assets/Leave.png" fluid alt="Responsive image" />
                            </Col>
                        </Row>
                        <Row xs={1} md={1} lg={2}>
                            <Col className="d-flex justify-content-center">
                                <Card.Body>
                                    <Card.Title className="display-4 pt-5 pl-5">{t("titleV3")}</Card.Title>
                                    <Card.Text className="text-justify px-5">
                                        {t("descriptionV3")}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <Image src=".././assets/leopard.png" fluid alt="Responsive image" />
                            </Col>
                        </Row>
                    </FadeIn>
                </Container>
            </React.Fragment>
        );
    }
}

export default withTranslation()(Volunteer);

Volunteer.propTypes = {
    t: PropTypes.func
};