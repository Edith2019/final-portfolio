const express = require('express');
const app = express();
const compression = require('compression');
const cookieSession = require('cookie-session');
const csurf = require('csurf');
const db = require('./utils/db');

app.use(express.json());

app.use(express.static('./public'));

app.use(compression());

let secrets;
if (process.env.SESSION_SECRET) {
    secrets = {
        cookieSession: {
            secret: process.env.SESSION_SECRET
        }
    };
} else {
    secrets = require('./utils/secrets');

}

//////set up the cookie///////

app.use(cookieSession({
    secret: secrets.cookieSession.secret,
    maxAge: 1000 * 60 * 60 * 24 * 14
}));

//////Csurf //////////

app.use(csurf());


app.use(function (req, res, next) {
    res.cookie('mytoken', req.csrfToken()); // put the current value of csrf token
    next();
});

////server stuff/////

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}


////route to post data from contact /////

app.post('/message', (req, res) => {

    console.log("req.session", req.session);
    console.log("req.body", req.body);
    console.log("req.params", req.params);

});





//// needs to be the last route /////

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
