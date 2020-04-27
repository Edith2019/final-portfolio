import React from 'react';

export default class HeaderModal extends React.Component {

    constructor(props) { //props are all the data you want to apss props
        super(props); // add a property to the instence props
        this.state = {
            menumodalvisible: false, // not needed to keep track of the state
        };

    }

    render() {

        return (

            <React.Fragment>
                {/* <div className="header-modal" > */}
                <div className="header-links">
                    <a className="header-a" href="#about"> about</a>
                    <a className="header-a" href="https://edith-portfolio.herokuapp.com/otherprojects" rel="noopener noreferrer" target='_blank'> projects</a>
                    <a className="header-a" href="https://edith-portfolio.herokuapp.com/contact" rel="noopener noreferrer" target='_blank'> contact</a>
                    <a className="header-a" href="http://localhost:8080/tandc" rel="noopener noreferrer" target='_blank' > tandc</a>
                    {/* </div> */}
                </div>

            </React.Fragment >

        );

    }

}