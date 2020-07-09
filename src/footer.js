import React from "react";

export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="footer-container">
                    <a className="footer-contact" href="http://www.edithchevallier.com/contact"
                        rel="noopener noreferrer" target="_blank"> contact </a>
                </div>
            </React.Fragment>
        );
    }
}