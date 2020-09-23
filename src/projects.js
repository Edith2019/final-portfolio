import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import MoreProjectsCard from "./moreProjectsCard";
import moreProjectsData from "./js/moreProjectsData";
import ProjectCard from "./projectsCard.js";
import projectsData from "./js/projectsData.js";
import { withTranslation } from "react-i18next";
import CarouselComponent from "./carousel.js";
import commentsData from "./js/commentsData.js";
import PropTypes from 'prop-types';
import FadeIn from "./hooks/fadeIn.js";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        };
        this.toggleHand = this.toggleHand.bind(this);
    }

    toggleHand() {
        const { isVisible } = this.state;
        this.setState({
            isVisible: !isVisible
        });
    }

    render() {
        const { t } = this.props;
        var { title } = this.props;
        const { isVisible } = this.state;
        if (isVisible) {
            title = "bmp";
        } else {
            title = "close";
        }
        return (
            <React.Fragment>
                <Container fluid id="Projects">
                    <FadeIn>

                        <h1 className="display-1 title" > {t("Projects")}</h1>
                        <ProjectCard projects={projectsData} />
                        <Accordion>
                            <Accordion.Collapse eventKey="0">
                                <MoreProjectsCard moreProjects={moreProjectsData} />
                            </Accordion.Collapse>
                            <Row className="d-flex justify-content-center">
                                <Accordion.Toggle as={Button} variant="warning" eventKey="0" onClick={this.toggleHand} >
                                    {t(title)}
                                </Accordion.Toggle>
                            </Row >
                        </Accordion>
                        {isVisible && (
                            <Row className="d-flex justify-content-center">
                                <Image src="./assets/handUp.png" className="pt-5 pl-5" fluid alt="Responsive image" />
                            </Row>
                        )}
                        <CarouselComponent comments={commentsData} />
                    </FadeIn>

                </Container >
            </React.Fragment >
        );
    }
}

export default (withTranslation()(Projects));

Projects.propTypes = {
    t: PropTypes.func,
    projects: PropTypes.array,
    title: PropTypes.string
}