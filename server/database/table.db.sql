

-- create roles table
DROP TABLE IF EXISTS roles CASCADE;
CREATE TABLE roles(
    id SERIAL PRIMARY KEY Unique,
    name varchar(255)
);
 
--insert into the role table
INSERT INTO roles(name)
VALUES('admin'), ('leader');

-- create users table
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY Unique,
    full_name VARCHAR(128) NOT NULL,
    email VARCHAR(128) NOT NULL,
    password VARCHAR(128) NOT NULL,
    role INTEGER NOT NULL,
    FOREIGN KEY(role) REFERENCES roles(id),
    created_at DATE DEFAULT CURRENT_DATE
);

-- create candidates table
DROP TABLE IF EXISTS candidates CASCADE;
CREATE TABLE candidates(
    id SERIAL PRIMARY KEY Unique,
    full_name VARCHAR(128) NOT NULL,
    email VARCHAR(128) NOT NULL,
    contacts VARCHAR(15) NOT NULL,
    skills VARCHAR[] NOT NULL,
    programme VARCHAR(128) NOT NULL,
    resume_path VARCHAR(128) NOT NULL,
    shortlisted VARCHAR(15) NOT NULL DEFAULT 'no',
    created_at DATE DEFAULT CURRENT_DATE
);