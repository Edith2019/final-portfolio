import React from 'react';


export default class TAndC extends React.Component {

    constructor() { //props are all the data you want to apss props
        super(); // add a property to the instence props
        this.state = {
            // name: 'Edith in intro',
        };
    }

    render() {
        return (

            <React.Fragment>
                <div className="tc">Testing tandc</div>
                <p className="copyright">Copyright © 2020 Edith-portfolio</p>
            </React.Fragment>
        );
    }





}