import React from 'react';

export default class OtherProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="op-btm">
                    <img src="/raccoon.png" className="header-logo" alt="logo" width="45px" height="45px" background="none" />
                    <a className="op-back " href="https://edith-portfolio.herokuapp.com/" > back to main </a>
                </div>
                <div className="op-container">
                    <div className="op-one-card">
                        <img src="/connectfour.png" className="op-one-img" alt="logo" width="150px" height="150px" />
                        <div className="op-one-text">
                            <h1 className="op-title">connect 4</h1>
                            <br></br>
                            <h3 className="op-tech">technologies:</h3>
                            <p className="op-tech-text">javascript// css </p>
                            <br></br>
                            <h3 className="op-description">project's description:</h3>
                            <p className="op-description-text"> sweet 2D connect four!</p>
                            <br></br>
                            <a className="op-demo" href="https://edith2019.github.io/connect-four/" rel="noopener noreferrer" target='_blank'>Demo</a>
                            <br></br>
                            <a className="op-github" href="https://github.com/Edith2019/connect-four" rel="noopener noreferrer" target='_blank'>Github</a>
                        </div>
                    </div>
                    <div className="op-two-card">
                        <img src="/spotifysearch.jpeg" className="op-two-img" alt="logo" width="150px" height="150px" />
                        <div className="op-two-text">
                            <h1 className="op-title" >spotify API</h1>
                            <br></br>
                            <h3 className="op-tech">technologies:</h3>
                            <p className="op-tech-text">javascript// css// spotify API </p>
                            <br></br>
                            <h3 className="op-description">project's description:</h3>
                            <p className="op-description-text"> search and find the artists you love!</p>
                            <br></br>
                            <a className="op-github" href=" https://github.com/Edith2019/spotify-API" rel="noopener noreferrer" target='_blank'>Github</a>
                        </div>
                    </div>
                    <div className="op-three-card">
                        <img src="/ticker.png" className="op-three-img" alt="logo" width="150px" height="150px" />
                        <div className="op-three-text">
                            <h1 className="op-title">twitter API</h1>
                            <br></br>
                            <h3 className="op-tech">technologies:</h3>
                            <p className="op-tech-text">javascript// css// twitter API </p>
                            <br></br>
                            <h3 className="op-description">project's description:</h3>
                            <p className="op-description-text"> keep track of the hottest news via ticker displaying twitter tweets!</p>
                            <br></br>
                            <a className="op-github" href="https://github.com/Edith2019/Twicker" rel="noopener noreferrer" target='_blank'>Github</a>
                        </div>
                    </div>
                </div>
                <p className="copyright-project">Copyright © 2020 Edith-portfolio</p>
            </React.Fragment >
        );
    }
}