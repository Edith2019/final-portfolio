import React from "react";
import Project from "./project"

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
                    <a className="op-back " href="http://www.edithchevallier.com/" > back to main </a>
                </div>
                {/* <div className="op-container">
                    <div className="op-one-card">
                        <img src="/connectfourDemo.gif" className="op-one-img" alt="logo" width="250px" height="150px" />
                        <div className="op-one-text">
                            <h1 className="op-title">connect 4</h1>
                            <br></br>
                            <h3 className="op-tech">technologies:</h3>
                            <p className="op-tech-text">Javascript // HTML// CSS// JSON </p>
                            <br></br>
                            <h3 className="op-description">project&apos;s description:</h3>
                            <p className="op-description-text"> sweet 2D connect four!</p>
                            <br></br>
                            <a className="op-demo" href="https://edith2019.github.io/connect-four/"
                                rel="noopener noreferrer" target="_blank">Demo</a>
                            <br></br>
                            <a className="op-github" href="https://github.com/Edith2019/connect-four"
                                rel="noopener noreferrer" target="_blank">Github</a>
                        </div>
                    </div>
                    <div className="op-two-card">
                        <img src="/spotifyAPI.gif" className="op-two-img" alt="logo" width="250px" height="150px" />
                        <div className="op-two-text">
                            <h1 className="op-title" >spotify API</h1>
                            <br></br>
                            <h3 className="op-tech">technologies:</h3>
                            <p className="op-tech-text">Javascript // HTML// CSS// JSON// Spotify API// proxy </p>
                            <br></br>
                            <h3 className="op-description">project&apos;s description:</h3>
                            <p className="op-description-text"> search and find the artists you love!</p>
                            <br></br>
                            <a className="op-github" href=" https://github.com/Edith2019/spotify-API"
                                rel="noopener noreferrer" target="_blank">Github</a>
                        </div>
                    </div>
                    <div className="op-three-card">
                        <img src="/TwickerDemo.gif" className="op-three-img" alt="logo" width="250px" height="150px" />
                        <div className="op-three-text">
                            <h1 className="op-title">twitter API</h1>
                            <br></br>
                            <h3 className="op-tech">technologies:</h3>
                            <p className="op-tech-text">Javascript // HTML// CSS// JSON// Twitter API</p>
                            <br></br>
                            <h3 className="op-description">project&apos;s description:</h3>
                            <p className="op-description-text"> keep track of the hottest news via ticker
                            displaying twitter tweets!</p>
                            <br></br>
                            <a className="op-github" href="https://github.com/Edith2019/Twicker"
                                rel="noopener noreferrer" target="_blank">Github</a>
                        </div>
                    </div> 
                </div>*/}
                <div className="op-container">
                    <Project
                        title="connect 4"
                        imageUrl="/connectfourDemo.gif"
                        technologies={["Javascript", "HTML", "CSS", "JSON"]}
                        description="sweet 2D connect four!"
                        links={[
                            { title: "Demo", url: "https://edith2019.github.io/connect-four/" },
                            { title: "Github", url: "https://github.com/Edith2019/connect-four" },
                        ]}
                    />
                    <Project
                        id = "two"
                        title="spotify API"
                        imageUrl="/spotifyAPI.gif"
                        technologies={["Javascript", "HTML", "CSS", "JSON", "Spotify API", "proxy"]}
                        description="search and find the artists you love!"
                        links={[{ title: "Github", url: "https://github.com/Edith2019/spotify-API" }]}
                    />
                    <Project
                        id ="three"
                        title="twitter API"
                        imageUrl="/TwickerDemo.gif"
                        technologies={["Javascript", "HTML", "CSS", "JSON", "Twitter API"]}
                        description="keep track of the hottest news via ticker displaying twitter tweets!"
                        links={[{ title: "Github", url: "https://github.com/Edith2019/Twicker" }]}
                    />
                </div>
                <p className="copyright-project">Copyright © 2020 Edith-portfolio</p>
            </React.Fragment >
        );
    }
}