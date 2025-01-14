CREATE TABLE IF NOT EXISTS records (
    session SERIAL PRIMARY KEY,
    time REAL,
    cpu REAL NOT NULL,
    ozu REAL NOT NULL,
    pzu REAL NOT NULL
);