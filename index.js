const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const db = require("./utils/db");
const ses = require("./ses");
app.use(express.json());

app.use(express.static("./public"));

app.use(compression());

let secrets;
process.env.NODE_ENV === "production"
    ? secrets = process.env
    : secrets = require("./secrets");
app.use(
    cookieSession({
        secret: `${secrets.cookieSession.secret}`,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

// Csurf //
app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken()); // put the current value of csrf token
    next();
});

// server stuff //
if (process.env.NODE_ENV !== "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

// route to post data from contact //
app.post("/message", (req, res) => {
    const { first, last, email, message, checkbox } = req.body;
    db.addContactsData(first, last, email, message, checkbox).then(result => {
        if (result.rows[0].message) {
            const sender = JSON.stringify(result.rows[0]);
            ses.sendEmail("edith.chevallier3000@gmail.com", "Email from  portfolio", sender)
                .then(() => {
                    res.json({
                        success: true
                    });
                });
        }
        const data = result.rows[0];
        res.json({ data });
    }).catch(err => {
        console.error(err);
        res.json({ error: true });
    });
});

app.use('/public', express.static(__dirname + '/public'));

// needs to be the last route //
app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

if (require.main == module) {
    app.listen(process.env.PORT || 8080, () => console.log("Server Listening"));
}