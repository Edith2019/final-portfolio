import React from 'react'
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { withTranslation } from 'react-i18next';
import axios from "./axios"; // need to put the slash to use the copy
import Modal from 'react-bootstrap/Modal';


class ContactN extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            email: "",
            message: "",
            show: false
        }

    }


    submit(event) {
        console.log("document.getElementById()", document.getElementById('formCheck'))
        console.log("this.state.checkbox", this.state.checkbox)
        console.log("something submit")
        console.log("first", this.state.first)
        axios.post("/message", {
            first: this.state.first,
            last: this.state.last,
            email: this.state.email,
            message: this.state.message,
            // checkbox: this.state.checkbox
        }).then(
            ({ data }) => {
                if (data.data) {
                    console.log("data.data", data.data)
                    this.setState({
                        userFirst: data.data.first,
                        userLast: data.data.last,
                        first: "",
                        last: "",
                        email: "",
                        message: "",
                    });
                    this.setState({
                        show: true
                    })
                } else {
                    this.setState({ error: true });
                }
            }
        );


    }




    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }
    handleShow() {
        this.setState({
            show: !this.show
        });
        // console.log("this.show in handleshow", this.state.show)
    }

    handleClose() {
        this.setState({
            show: false
        });

    }

    render() {

        const { t } = this.props;
        return (
            <React.Fragment >
                <Container fluid id="ContactN">

                    <h1 className="display-1  title pt-5">Contact</h1>

                    <Row xs={1} md={1} lg={2}>


                        <Col className="px-5">
                            <Card.Body >
                                <Card.Text className="text-justify pb-3">
                                    {t("descriptionC")}

                                </Card.Text>
                            </Card.Body>

                            <span className="px-5">

                                <InputGroup className="mb-3 px-5">
                                    <FormControl
                                        placeholder={t("FirstName")}
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        className="border-0 border-contact rounded-0"
                                        name="first"
                                        value={this.state.first}
                                        onChange={e => this.handleChange(e)}
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3 px-5">
                                    <FormControl
                                        placeholder={t("LastName")}
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        className="border-0 border-contact rounded-0"
                                        name="last"
                                        value={this.state.last}
                                        onChange={e => this.handleChange(e)}
                                        type="text"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3 px-5">
                                    <FormControl
                                        placeholder="Email"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        className="border-0 border-contact rounded-0"
                                        name="email"
                                        value={this.state.email}
                                        onChange={e => this.handleChange(e)}
                                        type="text"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3 px-5">
                                    <FormControl as="textarea"
                                        placeholder="Message"
                                        className="border-0 border-contact rounded-0"
                                        name="message"
                                        value={this.state.message}
                                        onChange={e => this.handleChange(e)}
                                        type="text"
                                    />
                                </InputGroup>
                                <Form.Group id="formCheck" className="px-5" name="checkbox">
                                    <Form.Check
                                        required
                                        label={t("Agree to terms and conditions")}
                                        feedback={t("You must agree before submitting.")}
                                        id="formCheck"
                                    // className="px-5"

                                    />

                                </Form.Group>
                                <Row className="d-flex justify-content-center m-5" >
                                    <Button variant="outline-warning" size="lg" block onClick={(event) => this.submit(event)} > {t("Send")}</Button>
                                </Row>
                            </span>

                        </Col>

                        <Col className="d-flex justify-content-center">
                            <Image fluid id="imgContact" src="./fcontact.png " alt="Responsive image" />
                        </Col>
                    </Row>
                    <Modal show={this.state.show} className="border border-0 border-dark">
                        <Modal.Header closeButton onClick={e => this.handleClose(e)}>
                            <Modal.Title>{t("ThankYou")} {this.state.userFirst} {t("forMsg")}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Row className="d-flex justify-content-center">
                                <Image fluid src="./giphy.gif" alt="Responsive image" />
                            </Row>
                            <Row className="d-flex justify-content-center mt-2">
                                {t("contentTY")}
                            </Row>
                        </Modal.Body>
                    </Modal>
                </Container>
            </React.Fragment>
        )
    }
}

export default (withTranslation()(ContactN));