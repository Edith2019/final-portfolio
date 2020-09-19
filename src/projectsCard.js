
import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { withTranslation } from 'react-i18next';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

class ProjectCard extends React.Component {

    constructor() {
        super();
        this.state = {
            arrowShown: true,
            arrowHidden: false,
            arrowTechDown: true,
            arrowTechUp: false,


        }
        this.handleClick = this.handleClick.bind(this);
        this.ref = React.createRef();

        // this.handleArrow = this.handleArrow.bind(this);
    }

    componentDidMount() {
        // const projectArr = this.props.projects

        // for (var i = 0; i < projectArr.length; i++) {
        //     var idDocDown = document.getElementById(projectArr[i].idP2)
        //     idDocDown.classList.add("arrowVisible")
        //     var idDocUp = document.getElementById(projectArr[i].idP3)
        //     idDocUp.classList.remove("arrowVisible")
        //     idDocUp.classList.add("arrowNotVisible")
        //     var idDocDownTech = document.getElementById(projectArr[i].idP4)
        //     idDocDownTech.classList.add("arrowVisible")
        //     var idDocUpTech = document.getElementById(projectArr[i].idP5)
        //     idDocUpTech.classList.remove("arrowVisible")
        //     idDocUpTech.classList.add("arrowNotVisible")

        // }
    }


    // handleClick(event, index) {
    //     console.log("something in handle click")
    //     const id = event.currentTarget.id;
    //     console.log("Id", id);
    //     console.log("index", index)

    //     const projectArr = this.props.projects
    //     console.log("this.props.porjects", this.props.projects)


    //     for (var i = 0; i < projectArr.length; i++) {

    //         console.log("projectArr[i].idP1", projectArr[i].idP1)
    //         if (projectArr[i].idP2 === id) {
    //             console.log("same same")
    //             // const idMatching = (element) => element === projectArr[i];
    //             // const index = projectArr.findIndex(idMatching);
    //             var idDocDown = document.getElementById(projectArr[i].idP2)
    //             console.log("idDoc ", idDocDown)
    //             idDocDown.classList.add("arrowNotVisible")
    //             idDocDown.classList.remove("arrowVisible")

    //             var idDocUp = document.getElementById(projectArr[i].idP3)
    //             idDocUp.classList.remove("arrowNotVisible")
    //             idDocUp.classList.add("arrowVisible")
    //             // this.arrowShown = !this.state.arrowShown;
    //             // this.arrowHidden = !this.state.arrowHidden;

    //             // this.setState({ arrowShown })
    //             // console.log("this.state.arrowDown", this.state.arrowDown)
    //         } else if (projectArr[i].idP3 === id) {
    //             console.log("id")
    //             // console.log("idDoc ", idDocDown)
    //             var idDocDown = document.getElementById(projectArr[i].idP2)

    //             // console.log("idDoc ", idDocDown)
    //             idDocDown.classList.remove("arrowNotVisible")
    //             idDocDown.classList.add("arrowVisible")

    //             var idDocUp = document.getElementById(projectArr[i].idP3)
    //             idDocUp.classList.add("arrowNotVisible")
    //             idDocUp.classList.remove("arrowVisible")



    //             // this.setState({
    //             //     arrowShown: true,
    //             //     arrowHidden: false,
    //             // })

    //         } else if (projectArr[i].idP4 === id) {
    //             console.log("same same")
    //             console.log("id")

    //             // const idMatching = (element) => element === projectArr[i];
    //             // const index = projectArr.findIndex(idMatching);
    //             var idDocDownTech = document.getElementById(projectArr[i].idP4)
    //             // console.log("idDoc ", idDocDown)
    //             idDocDownTech.classList.remove("arrowVisible")
    //             idDocDownTech.classList.add("arrowNotVisible")

    //             var idDocUpTech = document.getElementById(projectArr[i].idP5)
    //             idDocUpTech.classList.remove("arrowNotVisible")
    //             idDocUpTech.classList.add("arrowVisible")

    //         } else if (projectArr[i].idP5 === id) {
    //             console.log("id")

    //             var idDocDownTech = document.getElementById(projectArr[i].idP4)
    //             // console.log("idDoc ", idDocDown)
    //             idDocDownTech.classList.remove("arrowNotVisible")
    //             idDocDownTech.classList.add("arrowVisible")

    //             var idDocUpTech = document.getElementById(projectArr[i].idP5)
    //             idDocUpTech.classList.add("arrowNotVisible")
    //             idDocUpTech.classList.remove("arrowVisible")



    //             // this.setState({
    //             //     arrowShown: true,
    //             //     arrowHidden: false,
    //             // })

    //         }


    //     }
    // this.setState({
    //     arrowSelectedDown: !this.state.arrowSelectedDown,
    //     arrowUp: !this.state.arrowUp,
    // })


    handleClick(event, index) {
        console.log("something in handle click")
        const id = event.currentTarget.id;
        console.log("id", id)
        console.log("index", index)

        const projectArr = this.props.projects
        console.log("this.props.porjects", this.props.projects)

        var arrowShown = this.state.arrowShown;
        var arrowHidden = this.state.arrowHidden;
        var newState = {};
        console.log("outer loop arrowShown", arrowShown)

        for (var i = 0; i < projectArr.length; i++) {

            console.log("projectArr[i].idP1", projectArr[i].idP2)
            if (projectArr[i].idP2 === id) {
                console.log("same same")
                var arrowShownCard = this.state.arrowShown[i];
                console.log("arrowShown", arrowShownCard)

                this.setState({
                    arrowShown: !this.state.arrowShown,
                })
                // newState[projectArr[i].idP2.arrowShown] = projectArr[i].idP2 === projectArr[i].idP2

            }
            // console.log("projectArr[i].idP2.arrowShown", arrowShown.index)
        }

        //     // this.setState(newState)


        // this.setState({
        //     arrowShown: !this.state.arrowShown,
        //     arrowHidden: !this.state.arrowHidden
        // })

        // }

    }

    // handleArrow() {
    //     console.log("omething in handleArrow")
    //     // var arrowDown = document.getElementById(`project.idP1`)
    //     this.setState({
    //         arrowDown: !this.state.arrowDown,
    //         arrowUp: !this.state.arrowUp,
    //     })
    // }

    handleArrowTech() {

        this.setState({
            arrowTechDown: !this.state.arrowTechDown,
            arrowTechUp: !this.state.arrowTechUp
        })
    }

    render() {
        const { t } = this.props;
        // arrowHidden = {}
        return (
            <React.Fragment>
                <Container fluid className=" pb-5" id="Projects">
                    <Row className="d-flex justify-content-center py-5" xs={1} md={1} lg={3}>
                        {this.props.projects.map((project, index) => (
                            <Col className="d-flex justify-content-center px-5 py-5" key={project.keyP}>
                                <Card className="bg-warning" border="light" >
                                    <Card.Img variant="top" src={project.srcP} className="overlay" />
                                    <Card.Body className="bg-light">
                                        <Card.Title className="text-warning" >{t(project.titleP)}</Card.Title>
                                        <Card.Text>
                                            {t(project.descriptionP)}
                                        </Card.Text>
                                        <Accordion>

                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0" id={project.idP1}  >
                                                <Card.Title className="text-warning" >
                                                    Features
                                                  {this.state.arrowShown &&
                                                        <svg id={project.idP2} onClick={(event) => { this.handleClick(event, index) }} width="1em" height="1em" viewBox="0 0 16 16" className=" down bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                                            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                        </svg>

                                                    }
                                                    {this.state.arrowHidden &&


                                                        <svg id={project.idP3} onClick={(event) => { this.handleClick(event, index) }} width="1em" height="1em" viewBox="0 0 16 16" className=" up bi bi-chevron-double-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  >
                                                            <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                                                            <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                                                        </svg>
                                                    }
                                                </Card.Title>
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0">
                                                <Card.Text className="mb-3">
                                                    {project.featuresP.map((element, index) => (
                                                        <li key={project[index]}> {element}</li>
                                                    ))}
                                                </Card.Text>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <Accordion>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="p-0" id="technologiesP" >
                                                <Card.Title className="text-warning">
                                                    Technologies
                                                {/* {this.state.arrowTechDown && */}
                                                    <svg id={project.idP4} onClick={(event) => { this.handleClick(event, index) }} width="1em" height="1em" viewBox="0 0 16 16" className=" down bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                                        <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                        <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                    </svg>

                                                    {/* } */}
                                                    <svg id={project.idP5} onClick={(event) => { this.handleClick(event, index) }} width="1em" height="1em" viewBox="0 0 16 16" className=" up bi bi-chevron-double-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  >
                                                        <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                                                        <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                                                    </svg>
                                                </Card.Title>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Row className="mb-3">
                                                    <Col>
                                                        <Card.Text className="font-weight-bold">Front-End</Card.Text>
                                                        {project.technologiesFEP.map((element, index) => (
                                                            <li key={project[index]}>{element}</li>
                                                        ))}
                                                    </Col>
                                                    <Col>
                                                        <Card.Text className="font-weight-bold">Back-End</Card.Text>
                                                        {project.technologiesBEP.map((element, index) => (
                                                            <li key={project[index]}>{element}</li>
                                                        ))}
                                                    </Col>
                                                </Row>
                                            </Accordion.Collapse>
                                        </Accordion>
                                        <Row>
                                            <a href={project.hrefGitHubP} target="_blank" className="text-dark" rel="noopener noreferrer">
                                                <svg id="down" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                                                </svg>
                                                    Github
                                                </a>
                                        </Row>
                                        <Row>

                                            <a href={project.hrefHerokuP} target="_blank" className="text-dark" rel="noopener noreferrer">
                                                <svg id="up" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                                                </svg>{project.heroku}</a>
                                        </Row>
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