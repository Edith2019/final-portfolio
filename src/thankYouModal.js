// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button'
// import { withTranslation } from 'react-i18next';

// class ThankYouModal extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             show: true,


//         }
//     }
//     handleClose() {
//         this.setState({
//             show: false
//         });

//     }


//     render() {
//         const { t } = this.props;
//         return (
//             <React.Fragment>
//                 <Container>
//                     <Modal show={this.state.show} onHide={e => this.handleClose(e)} >
//                         <Modal.Header closeButton >
//                             <Modal.Title>{t("titleTandC")}</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>{t("contentTandC")}</Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={e => this.handleClose(e)}>
//                                 {t("Close")}
//                             </Button>
//                         </Modal.Footer>
//                     </Modal>

//                     {/* <h1>TEST</h1> */}
//                 </Container>
//             </React.Fragment>
//         )
//     }



// }

// export default (withTranslation()(ThankYouModal));