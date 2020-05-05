import React from 'react';

export default class HeaderModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menumodalvisible: false,
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="header-links">
                    <a className="header-a" href="#about"> about</a>
                    <a className="header-a" href="https://edith-portfolio.herokuapp.com/otherprojects" rel="noopener noreferrer" target='_blank'> projects</a>
                    <a className="header-a" href="https://edith-portfolio.herokuapp.com/contact" rel="noopener noreferrer" target='_blank'> contact</a>
                    <a className="header-a" href="https://edith-portfolio.herokuapp.com/tandc" rel="noopener noreferrer" target='_blank' > tandc</a>
                </div>
            </React.Fragment >
        );
    }
}