CREATE DATABASE ecommerce_db;
\c ecommerce_db;

CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    email_id VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
