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
                <img src="/Logo.png" className="logo" alt="logo" width="100px" height="100px" />
                <h2 className="testing">Work </h2>
                <h2> Contact </h2>

            </React.Fragment>

        );


    }







}