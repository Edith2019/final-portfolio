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
                    <a className="header-a" > about</a>
                    <a className="header-a" > project</a>
                    <a className="header-a" > contact</a>
                    {/* </div> */}
                </div>

            </React.Fragment >

        );

    }

}