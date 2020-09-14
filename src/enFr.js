import React from 'react'
import Form from 'react-bootstrap/Form'
import { withTranslation } from 'react-i18next';



class EnFr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // images: this.props.images,
            value: "en",

        };
    }



    handleChange(event) {
        console.log("selected val is ", event.target.value);
        let newlang = event.target.value;
        this.setState(() => ({ value: newlang }));
        console.log("state value is", newlang, this.props.i18n.changeLanguage);
        console.log("this.props", this.props);
        this.props.i18n.changeLanguage(newlang);
        console.log("this.props.i18n.changeLanguage(newlang)", this.props.i18n.changeLanguage(newlang))
    }

    render() {
        return (
            <React.Fragment>
                <Form.Group
                    value={this.state.value}
                    onChange={e => this.handleChange(e)}
                >

                    <div className="mb-3 input" key={`custom-inline-radio`}>
                        <Form.Check
                            bsCustomPrefix="custom-control"
                            custom
                            inline
                            type='radio'
                            id={`custom-inline-radio-1`}
                            label={"EN"}
                            value="en"
                            name="groupOptions"
                        />

                        <Form.Check
                            custom
                            inline
                            type='radio'
                            id={`custom-inline-radio-2`}
                            label={"FR"}
                            value="fr"
                            name="groupOptions"
                        />

                    </div>


                </Form.Group>
            </React.Fragment>
        )
    }

}

export default (withTranslation()(EnFr));