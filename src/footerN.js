import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { withTranslation } from "react-i18next";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

class FooterN extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleShow() {
        this.setState({
            show: !this.show
        });
    }

    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <Container fluid className="p-0" id="footerN">
                    <Nav className="justify-content-around bg-warning pb-2 pt-4" id="footerN">
                        <Nav.Item className="">
                            © 2020 EdithChevallier
                        </Nav.Item>
                        <Nav.Item className="">
                            <Button className="pt-0 tandc" variant="link" eventey="link-1" color="black" onClick={e => this.handleShow(e)}> {t("TandC")}</Button>
                        </Nav.Item>
                    </Nav>
                    <Modal show={this.state.show} onHide={e => this.handleClose(e)}>
                        <Modal.Header closeButton >
                            <Modal.Title>
                                {t("titleTandC")}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body id="modalBodyTandC">

                            {t("contentTandC")}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="warning" onClick={e => this.handleClose(e)}>
                                {t("Close")}
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </React.Fragment>
        );
    }
}

export default withTranslation()(FooterN);

FooterN.propTypes = {
    t: PropTypes.func
};