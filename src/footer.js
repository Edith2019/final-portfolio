import React from 'react';

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
                    <a className="footer-contact" href="https://edith-portfolio.herokuapp.com/contact" rel="noopener noreferrer" target='_blank'> contact </a>
                </div>
            </React.Fragment>
        );
    }
}