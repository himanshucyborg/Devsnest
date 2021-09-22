### Some important psql commands:

1. sudo -u psql --> switched to and starts psql command prompt

2. \c dbname username --> switch connection to new database (dbname) under a user specified by

3. \l --> list all available databases

4. \dt --> list all tables in current database

5. \d table_name --> describe a table

6. \dn --> list all Schemas of current database

7. \df --> list all functions of current database

8. \dv --> list all Views of current database

9. \du --> list all users and their assigned roles

10. \s --> to display command history

11. \g --> to execute previous command

12. \i filename --> to execute psql commands from a file

13. \timing --> to turn ON/OFF query execution time:w

14. \e --> to write command in default editor(vim/nano)

15. \q --> to quit psql

### BASIC QUERIES:

    Create new user --> CREATE USER username WITH PASSWORD 'password';
    Drop user --> DROP USER IF EXISTS username;
    Create new database --> CREATE DATABASE db_name;
    Grant privileges --> GRANT ALL|SELECT|UPDATE|DELETE PRIVILEGES ON DATABASE db_name TO username;
    Drop database --> DROP DATABASE IF EXISTS db_name;
    Create schema --> CREATE SCHEMA schema_name [CASCADE];
    Create table --> CREATE TABLE tb_name
    Insert data --> INSERT INTO tb_name(col1, col2,...) VALUES (val1, val2,...);
    Update Column --> UPDATE tb_name SET col = val WHERE condition;
    Delete row --> DELETE FROM tb_name WHERE condition;
    Delete table --> DROP TABLE IF EXISTS tb_name;