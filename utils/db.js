const spicedPg = require("spiced-pg");

// const bcrypt = require('bcryptjs');
// let { genSalt, hash, compare } = bcrypt; //those function are asynchronus
// const { promisify } = require('util');
// genSalt = promisify(genSalt);
// hash = promisify(hash);
// compare = promisify(compare);

let db;
let secrets;
if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    secrets = require('./secrets');
    db = spicedPg(`postgres:${secrets.users.user}:${secrets.users.pwreg}@localhost:5432/contacts`);

}

module.exports.addContactsData = (first, last, email, message, checkbox) => {

    const q = `INSERT into contacts (first, last, email, message, checkbox)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
`;
    const params = [first, last, email, message, checkbox];
    return db.query(q, params);

};
