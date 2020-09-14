import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Animated } from "react-animated-css";
// import { propTypes } from "react-bootstrap/esm/Image";
// import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Col from 'react-bootstrap/Col'


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
        <Container fluid className="mt-5 p-5 " >
          <Row className="justify-content-center mx-5 py-5 bg-warning text-center">
            {/* <Animated animationIn="fadeIn" animationInDuration={2500} isVisible={true}> */}
            <Col >
              <img src="./Tiger.png" />
              <Row className="justify-content-center ">
                <h1 id="animate" className="my-5 py-5 pr-3 display-1 text-white" >
                  {t("Welcome")}
                </h1>
              </Row>
            </Col>
            {/* </Animated> */}

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