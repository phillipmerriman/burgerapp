DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100),
    devoured BOOLEAN NOT NULL DEFAULT false,
    created_at DATETIME NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id)
);