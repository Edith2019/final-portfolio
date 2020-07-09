import React from "react";
import ReactDOM from "react-dom";
import Contact from "./contact";
import App from "./app";
import OtherProjects from "./otherprojects";
import TAndC from "./tandc";

let elem = <img src="/Logo.png" className="logo" alt="logo" width="100px" height="100px" />;
if (location.pathname == "/contact") {
    elem = <Contact />;

} else if (location.pathname == "/otherprojects") {
    elem = <OtherProjects />;

} else if (location.pathname == "/tandc") {
    elem = <TAndC />;

} else {
    elem = <App />;
}

ReactDOM.render(
    elem,
    document.querySelector("main")
);