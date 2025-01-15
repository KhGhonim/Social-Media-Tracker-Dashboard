CREATE TABLE Reports (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL DEFAULT '',
    reportType TEXT NOT NULL DEFAULT '',
    user_name TEXT NOT NULL DEFAULT '',
    user_id INTEGER REFERENCES users(id),
    user_projects TEXT[] NOT NULL,
    url TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);