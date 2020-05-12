import React from 'react';

export default class Description extends React.Component {
    constructor() {
        super();
        this.state = {
            descriptionisvisible: false
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="description-container" id="about">
                    <div className="description-text">
                        <h1 className="description-text-t">about</h1>
                        <p className="description-text-p">Hi! I’m Edith. A fresh fullstack developer just out of Spiced Academy programming bootcamp. Based in Berlin, but available worldwide. I speak Javascript, HTML, CSS, vue.js, React.js, english, french and sufficient german (ein bier bitte).

                        I’m a quick learner eager to master the tangle of Javascript in a silk CSS wrap. Currently exploring in-depth frameworks like vue.js and with a huge crush on React.js.

                        My future team will for sure appreciate my curious mindset, great communication skills and my excellent use of gifs. There’s always <a className="description-text-rm" href="https://media1.giphy.com/media/Hc8PMCBjo9BXa/giphy.gif?cid=ecf05e47283247b350d37b41087897244be4ae1f455d4b5f&rid=giphy.gif" rel="noopener noreferrer" target='_blank'> one for the right moment.
                        </a>
                        </p>
                        <div className="description-links-l">
                            <a className="description-links-l-l" href="https://www.linkedin.com/in/edith-chevallier/" rel="noopener noreferrer" target='_blank'>linkedin</a>
                            <a className="description-links-l-g" href="https://github.com/Edith2019" rel="noopener noreferrer" target='_blank'>github</a>
                        </div>
                    </div>
                    <div className="description-links">
                        <p className="description-links-t">other than work...</p>
                        <div className="description-links-icones">
                            <div className="description-card-img-title">
                                <img src="/smile.png" className="header-logo" alt="logo" width="50px" height="50px" background="none" />
                                <p>life</p>
                            </div>
                            <div className="description-card-img-title">
                                <img src="/flowers.png" className="header-logo" alt="logo" width="50px" height="50px" background="none" />
                                <p>gardening</p>
                            </div>
                            <div className="description-card-img-title">
                                <img src="/planet-earth.png" className="header-logo" alt="logo" width="50px" height="50px" background="none" />
                                <p>traveling</p>
                            </div>
                            <div className="description-card-img-title">
                                <img src="/laptop.png" className="header-logo" alt="logo" width="50px" height="50px" background="none" />
                                <p>learning</p>
                            </div>
                            <div className="description-card-img-title">
                                <img src="/speech-bubbles.png" className="header-logo" alt="logo" width="50px" height="50px" background="none" />
                                <p>listening and talking</p>
                            </div>
                            <div className="description-card-img-title">
                                <img src="/play.png" className="header-logo" alt="logo" width="50px" height="50px" background="none" />
                                <a href="https://www.youtube.com/watch?v=bCM3clq-_c0" rel="noopener noreferrer" target='_blank'><p className="description-card-img-a">check it out</p></a>
                            </div>
                        </div>
                    </div>
                </div >
            </React.Fragment >
        );
    }
}