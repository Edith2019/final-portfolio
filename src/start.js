import React from "react";
import ReactDOM from "react-dom";
// import Contact from "./contact";
import App from "./app";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";
// import OtherProjects from "./otherprojects";
// import TAndC from "./tandc";
// import 'bootstrap/dist/css/bootstrap.min.css';
// let elem = <img src="/Logo.png" className="logo" alt="logo" width="100px" height="100px" />;
// if (location.pathname == "/contact") {
//     elem = <Contact />;

// } else if (location.pathname == "/otherprojects") {
//     elem = <OtherProjects />;

// } else if (location.pathname == "/tandc") {
//     elem = <TAndC />;

// } else {
//     elem = <App />;
// }

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <App id="app" />
    </I18nextProvider>,
    document.querySelector("main")
);