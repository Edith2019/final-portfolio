import React from "react";
import Cube from "./cube";

export default class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="scrollable-element">
                    <div className="intro-container" id="intro">
                        <div className="intro-elem">
                            <div className="intro-animation">
                                <Cube />
                            </div>
                            <div className="intro-title">
                                <h1 className="intro-title-w">welcome</h1>
                                <h1 className="intro-title-t">to Edith`&apos;`aposs</h1>
                                <h1 className="intro-title-p">portfolio</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}