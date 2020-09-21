import React from 'react'
import Container from 'react-bootstrap/Container'
import Comments from './comments.js'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
// import Media from 'react-bootstrap/Media'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Blockquote from 'react-bootstrap/Blockquote'
import { withTranslation } from 'react-i18next';


class CarouselComponent extends React.Component {



    render() {
        const { t } = this.props
        return (
            <React.Fragment>
                <Container fluid >
                    <h1 className="display-3 py-4 text-center">{t("WTS")}</h1>




                    <Carousel className="w-75 mx-auto text-center" id="carousel">


                        {this.props.comments.map(comment =>
                            <Carousel.Item>

                                <Row>
                                    <Col>
                                    </Col>
                                    <Col xs={10}>
                                        <div className="carousel-inner">
                                            <Row className="py-5 pr-3" >

                                                <Col className="text-right my-auto" xs={3}>
                                                    <Image
                                                        roundedCircle
                                                        fluid
                                                        className="my-auto"
                                                        src={comment.srcCD}
                                                        alt="First slide"
                                                    />
                                                </Col>
                                                <Col className="my-auto pr-5" >
                                                    <p>{t(comment.descriptionCD)}</p>
                                                    <footer className="blockquote-footer">
                                                        {comment.footerCD} <cite title="Source Title">{comment.sourceCD}</cite>
                                                    </footer>
                                                </Col>

                                            </Row>

                                        </div>

                                    </Col>


                                    <Col >
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        )}
                    </Carousel>

                </Container>
            </React.Fragment>
        )
    }

}

export default (withTranslation()(CarouselComponent));