import React from 'react';
import axios from './axios'; //need to put the slash to use the copy


export default class Contact extends React.Component {
    constructor(props) { //props are all the data you want to apss props
        super(props); // add a property to the instence props
        this.state = {
            error: false,
            gdprisvisible: false,
            thankyouisvisible: false,
            first: '',
            last: '',
            email: '',
        };
        this.state.requiredFields = {
            first: '',
            last: '',
            email: ''

        };


    }


    submit() {


        if (!this.state.first || !this.state.last || !this.state.email) {
            console.log("this.state.requiredfield", this.state.requiredFields);
            this.setState({
                requiredFields: {
                    first: !this.state.first ? 'enter your first name' : "",
                    last: !this.state.last ? 'please enter your last name' : "",
                    email: !this.state.email ? 'please enter your email' : ""
                },

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
                    console.log("data", data);
                    if (data.data) {
                        console.log("data", data);
                        this.setState({
                            first: data.data.first,
                            last: data.data.last
                        });
                        this.setState({
                            thankyouisvisible: !this.state.thankyouisvisible
                        });

                        this.setState({
                            requiredFields: {
                                first: '',
                                last: '',
                                email: ''
                            }

                        });

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

    toggleThankYouModal() {
        console.log("toggle modal is running");

        this.setState({
            thankyouisvisible: !this.state.thankyouisvisible


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
                    <img src="/raccoon.png" className="header-logo" alt="logo" width="45px" height="45px" background="none" />
                    <a className="contact-back" href="https://edith-portfolio.herokuapp.com/"> back to main </a>
                </div>
                <div className="contact">
                    <div className="contact-white">
                        <p id="question">do you have questions?</p>
                        <br />
                        <p id="comments">do you have comments?</p>
                        <br />
                        <p id="touch">fill out the form and get in touch... </p>
                    </div>
                    <div className="contact-input">
                        <input id="contact-input-first" className={`${this.state.requiredFields && this.state.requiredFields.first ? 'error' : ''}`} name="first" type="text" placeholder="first name" onChange={e => this.handleChange(e)} />
                        <input id="contact-input-last" className={`${this.state.requiredFields && this.state.requiredFields.last ? 'error' : ''}`} name="last" type="text" placeholder="last name" onChange={e => this.handleChange(e)} />
                        <input id="contact-input-email" className={`${this.state.requiredFields && this.state.requiredFields.email ? 'error' : ''}`} name="email" type="email" placeholder="email" onChange={e => this.handleChange(e)} />
                        <input className="contact-input-message" name="message" type="text" placeholder="message" onChange={e => this.handleChange(e)} />
                        <div className="contact-checkbox-container">
                            <input className="contact-input-checkbox" name="checkbox" type="checkbox" onChange={e => this.handleChange(e)} />
                            <p className="contact-checkbox-t"> i agree with the terms and conditions</p>
                            {this.state.gdprisvisible && (<p> please agree with the terms and conditions</p>)}
                        </div>
                        <button className="contact-input-button" onClick={() => this.submit()}>submit</button>
                    </div>
                </div>
                {this.state.thankyouisvisible && (
                    <div className="contact-thankyou">
                        <div className="contact-thankyou-x-cont">
                            <h1 className="contact-thankyou-x" onClick={() => this.toggleThankYouModal()}>X</h1>
                        </div>
                        <h2 className="contact-thankyou-ty">thank you </h2>
                        <br />
                        <h1 className="contact-thankyou-name"> {this.state.first} </h1>
                        <br />
                        <h2 className="contact-thankyou-msg"> for your message! </h2>
                        <br />
                        <br />
                        <p className="contact-thankyou-text"> i will come back to you as soon as possible... in the meantime, enjoy chilling around!</p>
                    </div>)
                }
            </React.Fragment >



        );
    }

}