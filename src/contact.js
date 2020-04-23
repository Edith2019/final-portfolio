import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import axios from './axios'; //need to put the slash to use the copy


export default class Contact extends React.Component {
    constructor(props) { //props are all the data you want to apss props
        super(props); // add a property to the instence props
        this.state = {
            error: false,
            gdprisvisible: false,
        };
        this.state.requiredFields = {
            first: "please enter your first name",
            last: "please enter your last name",
            email: "please enter your email"

        };


    }


    submit() {


        if (!this.state.first || !this.state.last || !this.state.email || this.state.checkbox != 'on') {
            console.log("this.state.requiredfield", this.state.requiredFields);
            this.setState({
                requiredFields: this.state.requiredFields,
            });

        } else if (this.state.checkbox != 'on') {
            this.setState({
                gdprisvisible: !this.state.gdprisvisible
            });

        } else {
            console.log("this.state", this.state);
            console.log("first", this.state.first);
            console.log("checkbox", this.state.checkbox);
            axios.post('/message', {
                first: this.state.first,
                last: this.state.last,
                email: this.state.email,
                message: this.state.message,
                checkbox: this.state.checkbox

            }).then(
                ({ data }) => {
                    if (data.success) {
                        location.replace('/');
                    } else {
                        this.setState({
                            error: true
                        });
                    }
                }

            );
        }
    }
    togglegdprModal() {
        console.log("toggle modal is running");

        this.setState({
            gdprisvisible: !this.state.gdprisvisible


        });

    }


    handleChange({ target }) {

        // this[target.name] = target.value;
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="contact-btm">
                    <a className="contact-back" href="http://localhost:8080/"> back to main </a>
                </div>
                <div className="contact">
                    <div className="contact-white">
                        <p id="question">do you have questions?</p>
                        <p id="comments">do you have comments?</p>
                        <p id="touch">fill out the form and get in touch... </p>
                    </div>
                    <div className="contact-input">
                        <input id="contact-input-first" className={`{${this.state.requiredFields && this.state.requiredFields.first ? 'error' : ''} }`} name="first" type="text" placeholder="first name" onChange={e => this.handleChange(e)} />
                        <input id="contact-input-last" name="last" type="text" placeholder="last name" onChange={e => this.handleChange(e)} />
                        <input id="contact-input-email" name="email" type="email" placeholder="email" onChange={e => this.handleChange(e)} />
                        <input className="contact-input-message" name="message" type="text" r placeholder="message" onChange={e => this.handleChange(e)} />
                        <div className="contact-checkbox-container">
                            <input className="contact-input-checkbox" name="checkbox" type="checkbox" onChange={e => this.handleChange(e)} />
                            <p className="contact-checkbox-t"> I agree with the terms and conditions</p>
                        </div>
                        <button className="contact-input-button" onClick={() => this.submit()}>submit</button>
                    </div>
                    {this.state.gdprisvisible && (<p> please agree with the terms and conditions</p>)}
                </div>
            </React.Fragment >



        );
    }

}