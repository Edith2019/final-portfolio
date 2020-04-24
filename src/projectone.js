import React from 'react';


export default class ProjectOne extends React.Component {
    constructor() { //props are all the data you want to apss props
        super(); // add a property to the instence props
        this.state = {
            // name: 'Edith in intro',
        };

    }





    render() {

        return (

            <React.Fragment>
                <div className="projectone-container" id="project-one">
                    <img src="/petition.png" className="projectone-img" alt="logo" width="500px" height="500px" />
                    <div className="projectone-text">
                        <h1>work 1 : petition</h1>
                        <br></br>
                        <p>technologies utilisées</p>
                        <br></br>
                        <p>description du project</p>
                        <br></br>
                        <br></br>
                        <p>focus</p>
                        <br></br>
                        <p>ressenti</p>
                        <br></br>
                        <a>Demo</a>
                        <br></br>
                        <br></br>
                        <a className="projectone-text-a" href="https://github.com/spicedacademy/vegeta-petition/tree/Edith">Github</a>
                    </div>
                </div>
            </React.Fragment>

        );


    }


}