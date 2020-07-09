import React from "react";
import axios from "./axios"; // need to put the slash to use the copy

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            gdprisvisible: false,
            thankyouisvisible: false,
            first: "",
            last: "",
            email: "",
            message: "",
            inputfirst: "hello",
            userFirst: "",
            userLast: ""
        };
        this.state.requiredFields = {
            first: "",
            last: "",
            email: ""
        };
    }

    submit() {
        if (!this.state.first || !this.state.last || !this.state.email) {
            this.setState({
                requiredFields: {
                    first: this.state.first ? "" : "please enter your first name",
                    last: this.state.last ? "" : "please enter your last name",
                    email: this.state.email ? "" : "please enter your email"
                }
            });
        } else if (this.state.checkbox !== "on") {
            this.setState({
                gdprisvisible: !this.state.gdprisvisible
            });
        } else {
            axios.post("/message", {
                first: this.state.first,
                last: this.state.last,
                email: this.state.email,
                message: this.state.message,
                checkbox: this.state.checkbox
            }).then(
                ({ data }) => {
                    if (data.data) {
                        this.setState({
                            userFirst: data.data.first,
                            userLast: data.data.last,
                            first: "",
                            last: "",
                            email: "",
                            message: "",
                            thankyouisvisible: !this.state.thankyouisvisible
                        });
                    } else {
                        this.setState({ error: true });
                    }
                }
            );
        }
    }

    togglegdprModal() {
        this.setState({
            gdprisvisible: !this.state.gdprisvisible
        });
    }

    toggleThankYouModal() {
        this.setState({
            thankyouisvisible: !this.state.thankyouisvisible
        });
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="contact-btm">
                    <img src="/raccoon.png" className="header-logo" alt="logo" width="45px" height="45px" background="none" />
                    <a className="contact-back" href="http://www.edithchevallier.com/" > back to main </a>
                </div>
                <div className="contact">
                    <div className="contact-white">
                        <p id="question">do you have questions?</p>
                        <p id="comments">do you have comments?</p>
                        <p id="touch">fill out the form and get in touch... </p>
                    </div>
                    <div className="contact-input">
                        <input id="contact-input-first"
                            className={`${this.state.requiredFields && this.state.requiredFields.first ? "error" : ""}`}
                            name="first" type="text" placeholder="first name"
                            value={this.state.first} onChange={e => this.handleChange(e)} />
                        <input id="contact-input-last"
                            className={`${this.state.requiredFields && this.state.requiredFields.last ? "error" : ""}`}
                            name="last" type="text" placeholder="last name"
                            value={this.state.last} onChange={e => this.handleChange(e)} />
                        <input id="contact-input-email"
                            className={`${this.state.requiredFields && this.state.requiredFields.email ? "error" : ""}`}
                            name="email" type="email" placeholder="email"
                            value={this.state.email} onChange={e => this.handleChange(e)} />
                        <input className="contact-input-message" name="message" type="text" placeholder="message"
                            value={this.state.message} onChange={e => this.handleChange(e)} />
                        <div className="contact-checkbox-container">
                            <input className="contact-input-checkbox" name="checkbox" type="checkbox"
                                onChange={e => this.handleChange(e)} />
                            <p className="contact-checkbox-t"> i agree with the terms and conditions</p>
                        </div>
                        {this.state.gdprisvisible && <p> please agree with the terms and conditions</p>}
                        <button className="contact-input-button" onClick={() => this.submit()}>submit</button>
                    </div>
                </div>
                {this.state.thankyouisvisible && <div className="contact-thankyou">
                    <div className="contact-thankyou-x-cont">
                        <h1 className="contact-thankyou-x" onClick={() => this.toggleThankYouModal()} >X</h1>
                    </div>
                    <h2 className="contact-thankyou-ty">thank you </h2>
                    <h1 className="contact-thankyou-name"> {this.state.userFirst} {this.state.userLast}</h1>
                    <h2 className="contact-thankyou-msg"> for your message! </h2>
                    <p className="contact-thankyou-text"> i will come back to you as soon as possible... in the meantime,</p>
                    <a className="contact-thankyou-ride" href="https://www.youtube.com/watch?v=YUPA0C60YDE"
                        rel="noopener noreferrer" target="_blank"> enjoy the ride!</a>
                </div>
                }
                <p className="copyright">Copyright © 2020 Edith-portfolio</p>
            </React.Fragment >
        );
    }
}