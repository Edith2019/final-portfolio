import React from "react";
import Form from "react-bootstrap/Form";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";

class EnFr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "en",
            checkedEN: true,
            checkedFR: false
        };
    }

    componentDidMount() {
        if (this.props.i18n.language == "fr") {
            this.setState({
                checkedEN: false,
                checkedFR: true
            });
        }
    }

    handleCheckEN() {
        this.setState({
            checkedEN: true,
            checkedFR: false
        });
    }

    handleCheckFR() {
        this.setState({
            checkedEN: false,
            checkedFR: true
        });
    }

    handleChange(event) {
        let newlang = event.target.value;
        console.log("newLang", newlang)
        this.setState(() => ({ value: newlang }));
        this.props.i18n.changeLanguage(newlang);
    }

    render() {
        return (
            <React.Fragment>
                <Form.Group
                    value={this.state.value}
                    onChange={e => this.handleChange(e)}
                    // onLoad={(event) => this.componentDidMount(event)}
                    className="mt-2"

                >
                    <div className="input" key={"custom-inline-radio"} >
                        <Form.Check
                            bsCustomPrefix="custom-control"
                            custom
                            inline
                            type="checkbox"
                            id={"custom-inline-radio-1"}
                            label={"EN"}
                            value="en"
                            name="groupOptions"
                            className="pt-3"
                            checked={this.state.checkedEN}
                            onChange={() => { this.handleCheckEN() }}
                        />
                        <Form.Check
                            custom
                            inline
                            type="checkbox"
                            id={"custom-inline-radio-2"}
                            label={"FR"}
                            value="fr"
                            name="groupOptions"
                            checked={this.state.checkedFR}
                            onChange={() => { this.handleCheckFR() }}

                        />
                    </div>
                </Form.Group>
            </React.Fragment>
        );
    }
}

export default withTranslation()(EnFr);

EnFr.propTypes = {
    i18n: PropTypes.object,
    changeLanguage: PropTypes.func
};