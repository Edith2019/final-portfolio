import React from "react";

export default class ProjectThree extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="projectthree-container">
                    <img src="/socialnetwork.png" className="projectthree-img" alt="logo" width="500px" height="500px" />
                    <div className="projectthree-text">
                        <h1>work 3 : social-network</h1>
                        <br></br>
                        <h3>technologies:</h3>
                        <p>JavaScript// react.js// Redux// postgreSQL// axios// socket.io// AWS S3// ses // HTML// CSS</p>
                        <br></br>
                        <h3>project&apos;s description:</h3>
                        <p>creation of a social-network for users to come together around a common interest while interacting in private or general chat and personalizing their profiles.</p>
                        <br></br>
                        <h3>features: </h3>
                        <p>- register/ login/ reset password</p>
                        <p>- upload image/ biography</p>
                        <p>- add/ pending/ remove friends</p>
                        <p>- who is online?</p>
                        <p>- search people</p>
                        <p>- group and private chat</p>
                        <br></br>
                        <h3>highlights</h3>
                        <p> my favorit and moste complete project so far. it was a thrill to explore the infinite possibilities of redux.</p>
                        <br></br>
                        <a className="projectthree-text-a" href="https://swork-berlin.herokuapp.com/welcome#/" rel="noopener noreferrer" target="_blank">heroku</a>
                        <br></br>
                        <br></br>
                        <a className="projectthree-text-a" href="https://github.com/Edith2019/social-network" rel="noopener noreferrer" target="_blank">github</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}