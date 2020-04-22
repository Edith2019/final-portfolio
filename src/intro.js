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
                        <div className="intro-title">
                            <h1 className="intro-title-w">welcome</h1>
                            <h1 className="intro-title-t">to Edith's</h1>
                            <h1 className="intro-title-p">portfolio</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );


    }


}