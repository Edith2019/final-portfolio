import React from 'react';

export default class Intro extends React.Component {
    constructor() { //props are all the data you want to apss props
        super(); // add a property to the instence props
        this.state = {
            name: 'Edith in intro',
        };

    }





    render() {

        return (

            <React.Fragment>
                <p>testing render {this.state.name} </p>

            </React.Fragment>

        );


    }







}