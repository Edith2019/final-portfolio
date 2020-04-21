const spicedPg = require("spiced-pg");
const db = spicedPg("postgres:postgres:password@localhost:5432/profiles");
const bcrypt = require('bcryptjs');
let { genSalt, hash, compare } = bcrypt; //those function are asynchronus
const { promisify } = require('util');
genSalt = promisify(genSalt);
hash = promisify(hash);
compare = promisify(compare);