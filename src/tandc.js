import React from "react";

export default class TAndC extends React.Component {

    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="tandc-header">
                    <img src="/raccoon.png" className="header-logo" alt="logo" width="45px" height="45px" background="none" />
                    <a className="tandc-back " href="http://www.edithchevallier.com/" > back to main </a>
                </div>
                <div className="tandc-container">
                    <div className="tandc-text">
                        <p>Like most similar websites, this site uses cookies. On this page we explain more about cookies and
                        how we use them. By using this website and agreeing to this policy, you consent to our use of cookies
                            in accordance with the terms of this policy. </p>
                        <h2>About cookies</h2>
                        <p>Cookies are files, often including unique identifiers, that are sent by web servers to web browsers,
                        and which may then be sent back to the server each time the
                            browser requests a page from the server.</p>
                        <p>Cookies can be used by web servers to identify and track users as they navigate different pages on a
                            website, and to identify users returning to a website.</p>
                        <p>Cookies may be either “persistent” cookies or “session” cookies. A persistent cookie consists of a
                        text file sent by a web server to a web browser, which will be stored by the browser and will remain
                        valid until its set expiry date (unless deleted by the user before the expiry date). A session
                        cookie, on the other hand, will expire at the end of the user session,
                            when the web browser is closed.</p>
                        <h2>Cookies on this website</h2>
                        <p>We use both session cookies and persistent cookies on this website.</p>
                    </div>
                </div>
                <p className="copyright">Copyright © 2020 Edith-portfolio</p>
            </React.Fragment>
        );
    }
}