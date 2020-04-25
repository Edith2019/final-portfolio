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
                        <h3>technologies:</h3>
                        <p>vue.js// node.js// postgres// s3// axios// css</p>
                        <br></br>
                        <h3>project's description:</h3>
                        <p>this work consist of a single page application where anybody can go and post an image with titles and description. other features like comment and navigation give the user a way to interact with each other and get a community feeling. </p>
                        <br></br>
                        <h3>features:</h3>
                        <p>- upload image/ title/ description</p>
                        <p>- add comments on images</p>
                        <br></br>
                        <h3>highlights:</h3>
                        <p>vue.js is a great framework to explore and offer a powerful tool to create an app.</p>
                        <br></br>
                        <a className="projecttwo-text-a" >demo</a>
                        <br></br>
                        <br></br>
                        <a className="projecttwo-text-a" href="https://github.com/spicedacademy/vegeta-imageboard/tree/Edith">github</a>
                    </div>
                    <img src="/imageboard.png" className="projecttwo-img" alt="logo" height="500px" />

                </div>
            </React.Fragment>

        );


    }


}