import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
// import ThankYouModal from './thankYouModal.js'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'



class FooterN extends React.Component {
    constructor() {
        super();
        // this.toggleModal = this.toggleModal.bind(this)
        this.state = {
            // modalVisible: false
            show: false
        }
    }
    // toggleModal() {
    //     console.log("toggle somthing")
    //     const { modalVisible } = this.state;
    //     this.setState({
    //         modalVisible: !this.modalVisible
    //     })

    // }
    handleClose() {
        this.setState({
            show: false
        });

    }


    handleShow() {
        this.setState({
            show: !this.show
        });
        // console.log("this.show in handleshow", this.state.show)
    }

    render() {
        const { t } = this.props;
        // const { modalVisible } = this.state;
        // console.log("modalvisible after render", modalVisible)
        const { show } = this.state;
        console.log("show in render", show);
        return (
            <React.Fragment>
                <Nav className="justify-content-center bg-warning pb-2 pt-4" id="footerN">
                    <Nav.Item className="pr-5 mr-5">
                        © 2020 EdithChevallier
                    </Nav.Item>
                    <Nav.Item className="pl-5 ml-5 ">
                        <Button className="pt-0 tandc" variant="link" eventkey="link-1" color="black" onClick={e => this.handleShow(e)}> {t("TandC")}</Button>
                    </Nav.Item>
                </Nav>
                <Modal show={this.state.show} onHide={e => this.handleClose(e)} >
                    <Modal.Header closeButton >
                        <Modal.Title>{t("titleTandC")}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{t("contentTandC")}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={e => this.handleClose(e)}>
                            {t("Close")}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }



}

export default (withTranslation()(FooterN));