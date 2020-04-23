import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import axios from './axios'; //need to put the slash to use the copy


export default class Contact extends React.Component {
    constructor(props) { //props are all the data you want to apss props
        super(props); // add a property to the instence props
        this.state = {
            error: false,
            gdprisvisible: false
        };

    }
    submit() {
        if (this.state.checkbox != 'on') {
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
                <div className="contact">
                    <p> Testing in contact </p>
                    <div className="contact-input">
                        <input className="contact-input-first" name="first" type="text" placeholder="first name" onChange={e => this.handleChange(e)} required />
                        <input className="contact-input-last" name="last" type="text" required="required" placeholder="last name" onChange={e => this.handleChange(e)} />
                        <input className="contact-input-email" name="email" type="email" required="required" placeholder="email" onChange={e => this.handleChange(e)} />
                        <input className="contact-input-message" name="message" type="text" required="required" placeholder="message" onChange={e => this.handleChange(e)} />
                        <div className="contact-checkbox-container">
                            <p className="contact-checkbox-t"> I agree with the terms and conditions</p>
                            <input className="contact-input-checkbox" name="checkbox" type="checkbox" required="required" onChange={e => this.handleChange(e)} />
                        </div>
                        <button className="contact-input-button" onClick={() => this.submit()}>submit</button>
                    </div>
                    {this.state.gdprisvisible && (<p> please agree with the terms and conditions</p>)}
                </div>
            </React.Fragment >



        );
    }
}
