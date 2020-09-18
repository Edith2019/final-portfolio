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


class CarouselComponent extends React.Component {



    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <h1 className="display-3 py-5 text-center">What they say...</h1>




                    <Carousel className="w-75 mx-auto">


                        {this.props.comments.map(comment =>
                            <Carousel.Item>

                                <Row>
                                    <Col>
                                    </Col>
                                    <Col xs={8}>
                                        <div className="carousel-inner">
                                            <Row className="py-5">

                                                <Col className="text-center" >
                                                    <Image
                                                        roundedCircle
                                                        fluid
                                                        className=""
                                                        src={comment.srcCD}
                                                        alt="First slide"
                                                    />
                                                </Col>
                                                <Col className="my-auto" >
                                                    <p>{comment.descriptionCD}</p>
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

export default CarouselComponent;