import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { withTranslation } from "react-i18next";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

class Home extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <React.Fragment >
                <Container fluid className="mt-5 pt-5" id="Home" >
                    <Row className=" mx-5 pt-5 pb-2 bg-warning text-center">
                        <Col className=" my-auto" >
                            <Image fluid id="tiger" src=".././assets/Tiger.png" className="fadeInAbout" />
                        </Col>
                    </Row>
                    <Row className="mx-5 bg-warning text-center">
                        <Col className="my-auto" >
                            <h1 className="fadeInAbout mt-5 display-1 text-white" >
                                {t("Welcome")}
                            </h1>
                        </Col>
                    </Row>
                    <Row className="mx-5 pt-2 pb-5 bg-warning text-center">
                        <Col>
                            <svg id="further" width="5em" height="5em" viewBox="0 0 16 16" className=" fadeInAbout  bi bi-chevron-compact-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                            </svg>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment >
        );
    }
}

export default withTranslation()(Home);

Home.propTypes = {
    t: PropTypes.func
};