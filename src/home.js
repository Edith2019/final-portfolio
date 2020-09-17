import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Animated } from "react-animated-css";
// import { propTypes } from "react-bootstrap/esm/Image";
// import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';


class Home extends React.Component {

  constructor() {
    super();
    this.state = {

    };
  }

  // componentDidMount


  render() {
    const { t } = this.props;
    return (

      <React.Fragment>

        <Container fluid className="mt-5 pt-5" >
          <Row className=" mx-5 pt-5 pb-2 bg-warning text-center">

            <Col className=" my-auto" >
              <Image fluid src="./Tiger.png" />
            </Col>
          </Row>
          <Row className=" mx-5 bg-warning text-center">
            <Col classNAme=" my-auto" >

              {/* <Col> */}
              <h1 id="animate" className="my-5 pr-3 display-1 text-white" >
                {t("Welcome")}
              </h1>
              {/* </Col> */}
            </Col>


          </Row>

        </Container>
      </React.Fragment >

    );
  }


}


// Home.ContextTypes = {

//   animationInDuration: PropTypes.number


// }


export default (withTranslation()(Home));