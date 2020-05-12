import React from 'react';


export default class ProjectOne extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="projectone-container" id="project-one">
                    <img src="/petition.png" className="projectone-img" alt="logo" height="500px" />
                    <div className="projectone-text">
                        <h1>work 1: petition</h1>
                        <br></br>
                        <h3>technologies:</h3>
                        <p>express// node.js// express-handlebars// postgreSQL// JavaScript// jQuery// HTML// CSS</p>
                        <br></br>
                        <h3>project's description:</h3>
                        <p>the idea behind this project is to create an online petition that visitors can sign to make their voice heard on an issue that they identify with.</p>
                        <br></br>
                        <h3>features:</h3>
                        <p>- register/ login</p>
                        <p>- cookie session for authorization</p>
                        <p>- user info and hashed pw stored in database</p>
                        <p>- canvas' signature after registration only</p>
                        <p>- list of total signers and list per city signers</p>
                        <p>- update profile page</p>
                        <br></br>
                        <h3>highlights:</h3>
                        <p>it was a great pleasure to play around with handlebars while figuring out the best user experience in routing the pages.</p>
                        <br></br>
                        <a className="projectone-text-a" href=" https://petitiontempelhof.herokuapp.com/" rel="noopener noreferrer" target='_blank'>heroku</a>
                        <br></br>
                        <br></br>
                        <a className="projectone-text-a" href="https://github.com/Edith2019/petition" rel="noopener noreferrer" target='_blank'>github</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}