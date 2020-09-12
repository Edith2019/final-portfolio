import React from 'react'
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class ContactN extends React.Component {

constructor() {
super();
this.state= {


}

}

render() {

return (
    <React.Fragment >
        <Container fluid  id="ContactN">
            <h1 className="display-1  title pt-5">Contact</h1>

            <Row xs={1} md={1} lg={2}>

               
                <Col className="px-5">
                    <Card.Body >
                        <Card.Text className="text-justify pb-3">
                            I’m Edith. A fullstack developer based in Berlin, but available worldwide. I speak Javascript, HTML, CSS, vue.js,
                            React.js, english, french and sufficient german (ein bier bitte).
                        
                                </Card.Text>
                    </Card.Body>

                    <span className="px-5">
                        <InputGroup className="mb-3 px-5">
                    <FormControl
                        placeholder="First Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                                className="border-0 border-contact rounded-0"
                    />
          
            
                </InputGroup>
                        <InputGroup className="mb-3 px-5">
                <FormControl
                    placeholder="Last Name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                                className="border-0 border-contact rounded-0"
                />
                </InputGroup>
                        <InputGroup className="mb-3 px-5">
                <FormControl
                    placeholder="Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                                className="border-0 border-contact rounded-0"
                />
                </InputGroup>

                        <InputGroup className="mb-3 px-5">
                    <FormControl as="textarea" 
                    placeholder="Message"
                                className="border-0 border-contact rounded-0"
                     />
                </InputGroup>
                    <Row className="d-flex justify-content-center m-5" >
                        <Button variant="outline-warning" size="lg" block>Send</Button>
                     </Row>
                    </span>

                </Col>
               
                <Col className="d-flex justify-content-center">
                <Image id="imgContact" src="./fcontact.png"/>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
)



}



}

export default ContactN;