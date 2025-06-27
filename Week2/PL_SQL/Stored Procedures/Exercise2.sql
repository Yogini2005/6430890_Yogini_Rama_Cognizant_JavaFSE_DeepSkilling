DROP TABLE savings_accounts CASCADE CONSTRAINTS;
DROP TABLE employees CASCADE CONSTRAINTS;
CREATE TABLE savings_accounts (
    account_id   NUMBER PRIMARY KEY,
    customer_id  NUMBER,
    balance      NUMBER(12, 2)
);

CREATE TABLE employees (
    employee_id    NUMBER PRIMARY KEY,
    name           VARCHAR2(100),
    department_id  NUMBER,
    salary         NUMBER(10, 2)
);
CREATE TABLE accounts (
    account_id NUMBER PRIMARY KEY,
    balance NUMBER(10, 2)
);
-- Insert sample data
INSERT INTO employees VALUES (1, 'Alice', 10, 50000);
INSERT INTO employees VALUES (2, 'Bob', 20, 60000);
INSERT INTO employees VALUES (3, 'Charlie', 10, 55000);
-- Insert sample data
INSERT INTO accounts VALUES (201, 5000.00);
INSERT INTO accounts VALUES (202, 3000.00);
