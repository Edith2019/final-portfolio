import React from 'react';

export default class Intro extends React.Component {
    constructor() { //props are all the data you want to apss props
        super(); // add a property to the instence props
        this.state = {
            // name: 'Edith in intro',
        };

    }





    render() {

        return (

            <React.Fragment>
                <div className="intro-container">
                    <div className="intro-elem">
                        <div className="intro-animation"></div>
                        <h1 className="intro-title"> Welcome to my portfolio</h1>
                        {/* <button className="intro-contact"> Contact </button> */}
                    </div>
                </div>
            </React.Fragment>

        );


    }







}