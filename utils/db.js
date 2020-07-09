const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/contacts"
);

module.exports.addContactsData = (first, last, email, message, checkbox) => {
    const q = `INSERT into contacts (first, last, email, message, checkbox)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;
    const params = [first, last, email, message, checkbox];
    return db.query(q, params);
};
