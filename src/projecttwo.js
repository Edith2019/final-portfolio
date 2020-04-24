import React from 'react';


export default class ProjectTwo extends React.Component {
    constructor() { //props are all the data you want to apss props
        super(); // add a property to the instence props
        this.state = {
            // name: 'Edith in intro',
        };

    }





    render() {

        return (

            <React.Fragment>
                <div className="projecttwo-container">
                    <div className="projecttwo-text">
                        <h1>work 2 : image-board</h1>
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
                        <a className="projecttwo-text-a" >Demo</a>
                        <br></br>
                        <br></br>
                        <a className="projecttwo-text-a" href="https://github.com/spicedacademy/vegeta-imageboard/tree/Edith">Github</a>
                    </div>
                    <img src="/imageboard.png" className="projecttwo-img" alt="logo" width="500px" height="500px" />

                </div>
            </React.Fragment>

        );


    }


}