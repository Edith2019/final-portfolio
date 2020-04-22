import React from 'react';

export default class Header extends React.Component {
    constructor() { //props are all the data you want to apss props
        super(); // add a property to the instence props
        this.state = {
            // name: 'Edith in intro',
        };

    }





    render() {

        return (

            <React.Fragment>
                <div className="header">
                    <div className="header-container">
                        <img src="/Logo.png" className="header-logo" alt="logo" width="100px" height="100px" />
                        <div className="header-elem">
                            <a className="header-work"> Work </a>
                            <img src="/hamburger.png" className="header-hamburger" alt="hamburger" width="50px" height="50px" />

                        </div>
                    </div>
                </div >
                <div className="testing">

                </div>
            </React.Fragment >

        );


    }







}