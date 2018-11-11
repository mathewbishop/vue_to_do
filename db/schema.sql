DROP DATABASE IF EXISTS vue_todo_db;

CREATE DATABASE vue_todo_db;

USE vue_todo_db;


CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    list_item VARCHAR(200) NOT NULL,
    completed BOOLEAN
);