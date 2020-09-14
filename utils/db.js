const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/contacts"
);

module.exports.addContactsData = ({ first, last, email, message }) => {
    const q = `INSERT INTO contacts (first, last, email, message)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;
    const params = [first, last, email, message];
    return db.query(q, params);
};
