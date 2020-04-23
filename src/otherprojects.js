import React from 'react';

export default class OtherProjects extends React.Component {
    constructor(props) { //props are all the data you want to apss props
        super(props); // add a property to the instence props
        this.state = {

        };



    }



    render() {
        return (
            <React.Fragment>
                <div className="op-btm">
                    <a className="op-back " href="http://localhost:8080/"> back to main </a>
                </div>
                <div className="op-container">
                    <div className="op-one-card">
                        <img src="/connectfour.png" className="op-one-img" alt="logo" width="150px" height="150px" />
                        <div className="op-one-text">
                            <h1 className="op-title">connect four</h1>
                            <br></br>
                            <p className="op-tech">technologies utilisées</p>
                            <br></br>
                            <p className="op-description">description du project</p>
                            <br></br>
                            <br></br>
                            <p className="op-focus">focus</p>
                            <br></br>
                            <br></br>
                            <a className="op-demo">Demo</a>
                            <br></br>
                            <br></br>
                            <a className="op-github">Github</a>
                        </div>
                    </div>
                    <div className="op-two-card">
                        <img src="/spotifysearch.jpeg" className="op-two-img" alt="logo" width="150px" height="150px" />
                        <div className="op-two-text">
                            <h1 className="op-title" >spotify API</h1>
                            <br></br>
                            <p className="op-tech">technologies utilisées</p>
                            <br></br>
                            <p className="op-description">description du project</p>
                            <br></br>
                            <br></br>
                            <p className="op-focus">focus</p>
                            <br></br>
                            <br></br>
                            <a className="op-demo">Demo</a>
                            <br></br>
                            <br></br>
                            <a className="op-github">Github</a>
                        </div>
                    </div>
                    <div className="op-three-card">
                        <img src="/ticker.png" className="op-three-img" alt="logo" width="150px" height="150px" />
                        <div className="op-three-text">
                            <h1 className="op-title">twitter API</h1>
                            <br></br>
                            <p className="op-tech">technologies utilisées</p>
                            <br></br>
                            <p className="op-description">description du project</p>
                            <br></br>
                            <br></br>
                            <p className="op-focus">focus</p>
                            <br></br>
                            <br></br>
                            <a className="op-demo">Demo</a>
                            <br></br>
                            <br></br>
                            <a className="op-github">Github</a>
                        </div>
                    </div>
                </div>
            </React.Fragment >



        );
    }

}