import React from 'react';

export default class Footer extends React.Component {
    constructor() { //props are all the data you want to apss props
        super(); // add a property to the instence props
        this.state = {
            // name: 'Edith in intro',
        };

    }





    render() {

        return (

            <React.Fragment>
                <div className="footer-container">
                    <button className="footer-contact"> contact </button>
                </div>
            </React.Fragment>

        );


    }


}