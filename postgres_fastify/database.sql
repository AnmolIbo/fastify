CREATE DATABASE todo_database;
--\c into todo_database

---to run postgres sudo -u postgres psql

CREATE TABLE todo (
    todo_id serial PRIMARY KEY,
    description VARCHAR(255),
);
--\dt to see table