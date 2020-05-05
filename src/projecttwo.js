import React from 'react';

export default class ProjectTwo extends React.Component {
    constructor() {
        super();
        this.state = {
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
                        <p>this work consists of a single page application where anybody can go and post an image with title and description. other features like comments and navigation give users a way to interact with each other and get a community feeling. </p>
                        <br></br>
                        <h3>features:</h3>
                        <p>- upload image/ title/ description</p>
                        <p>- add comments on images</p>
                        <br></br>
                        <h3>highlights:</h3>
                        <p>vue.js is a great framework to explore and offer a powerful tool to create an app.</p>
                        <br></br>
                        <a className="projecttwo-text-a" href="https://img-board.herokuapp.com/" rel="noopener noreferrer" target='_blank'>demo</a>
                        <br></br>
                        <br></br>
                        <a className="projecttwo-text-a" href="https://github.com/Edith2019/imageboard" rel="noopener noreferrer" target='_blank'>github</a>
                    </div>
                    <img src="/imageboard.png" className="projecttwo-img" alt="logo" height="500px" />
                </div>
            </React.Fragment>
        );
    }
}