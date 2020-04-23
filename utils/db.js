const spicedPg = require("spiced-pg");
const db = spicedPg("postgres:postgres:password@localhost:5432/contacts");
const bcrypt = require('bcryptjs');
let { genSalt, hash, compare } = bcrypt; //those function are asynchronus
const { promisify } = require('util');
genSalt = promisify(genSalt);
hash = promisify(hash);
compare = promisify(compare);



module.exports.addContactsData = (first, last, email, message, checkbox) => {

    const q = `INSERT into contacts (first, last, email, message, checkbox)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
`;
    const params = [first, last, email, message, checkbox];
    return db.query(q, params);

};
