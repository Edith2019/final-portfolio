const spicedPg = require("spiced-pg");

// const bcrypt = require('bcryptjs');
// let { genSalt, hash, compare } = bcrypt; //those function are asynchronus
// const { promisify } = require('util');
// genSalt = promisify(genSalt);
// hash = promisify(hash);
// compare = promisify(compare);

// let db;

// if (process.env.DATABASE_URL) {
//     db = spicedPg(process.env.DATABASE_URL);
// } else {
// let secrets;
//     let secrets = require('./secrets');
//     db = spicedPg(`postgres:${secrets.users.user}:${secrets.users.pwreg}@localhost:5432/contacts`);

// }

const db = spicedPg(
    process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/contacts"
    // "postgres://ezcgnhrcwzqbur:f01f7cc72c285dd085ad8f52a51b64a230269c2a8c9f6129606f6459fdb7080e@ec2-54-217-213-79.eu-west-1.compute.amazonaws.com:5432/d8um9f2u3go0f"
);

module.exports.addContactsData = (first, last, email, message, checkbox) => {

    const q = `INSERT into contacts (first, last, email, message, checkbox)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
`;
    const params = [first, last, email, message, checkbox];
    return db.query(q, params);

};
