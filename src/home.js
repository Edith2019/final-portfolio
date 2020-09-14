import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Animated } from "react-animated-css";
// import { propTypes } from "react-bootstrap/esm/Image";
// import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';


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
            <img src="./Tiger.png" />
            <h1 id="animate" className="my-5 py-5 display-1 text-white" >{t("Welcome")}</h1>
            {/* </Animated> */}

          </Row>

        </Container>
      </React.Fragment>

    );
  }


}


// Home.ContextTypes = {

//   animationInDuration: PropTypes.number


// }


export default (withTranslation()(Home));