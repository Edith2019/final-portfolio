DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    first VARCHAR(100) NOT NULL CHECK(first != ''),
    last VARCHAR(100) NOT NULL CHECK(last != ''),
    email VARCHAR(100) NOT NULL CHECK(email != ''),
    message VARCHAR(300) NOT NULL,
    checkbox VARCHAR(4) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
