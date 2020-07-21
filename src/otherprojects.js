import React from "react";
import Project from "./project"

export default class OtherProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // console.log("this.props", this.props)

    }
    render() {
        return (
            <React.Fragment>
                <div className="op-btm">
                    <img src="/raccoon.png" className="header-logo" alt="logo" width="45px" height="45px" background="none" />
                    <a className="op-back " href="http://www.edithchevallier.com/" > back to main </a>
                </div>
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
                        title="spotify API"
                        imageUrl="/spotifyAPI.gif"
                        technologies={["Javascript", "HTML", "CSS", "JSON", "Spotify API", "proxy"]}
                        description="search and find the artists you love!"
                        links={[{ title: "Github", url: "https://github.com/Edith2019/spotify-API" }]}
                    />
                    <Project
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