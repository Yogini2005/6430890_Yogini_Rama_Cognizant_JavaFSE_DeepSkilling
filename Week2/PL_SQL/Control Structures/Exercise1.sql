CREATE TABLE customers (
    customer_id    NUMBER PRIMARY KEY,
    name           VARCHAR2(100),
    age            NUMBER,
    balance        NUMBER(12,2),
    is_vip         VARCHAR2(5) DEFAULT 'FALSE'  -- Using VARCHAR2 for simplicity ('TRUE'/'FALSE')
);
CREATE TABLE loans (
    loan_id        NUMBER PRIMARY KEY,
    customer_id    NUMBER REFERENCES customers(customer_id),
    interest_rate  NUMBER(5,2),         -- For example: 8.75%
    due_date       DATE
);
-- Sample customers
INSERT INTO customers (customer_id, name, age, balance) VALUES (1, 'Alice', 65, 15000);
INSERT INTO customers (customer_id, name, age, balance) VALUES (2, 'Bob', 45, 8000);
INSERT INTO customers (customer_id, name, age, balance) VALUES (3, 'Charlie', 70, 12000);

-- Sample loans
INSERT INTO loans (loan_id, customer_id, interest_rate, due_date)
VALUES (101, 1, 9.5, SYSDATE + 20);  -- Due in 20 days

INSERT INTO loans (loan_id, customer_id, interest_rate, due_date)
VALUES (102, 2, 8.5, SYSDATE + 40);  -- Due in 40 days

INSERT INTO loans (loan_id, customer_id, interest_rate, due_date)
VALUES (103, 3, 10.0, SYSDATE + 10);  -- Due in 10 days

COMMIT;
/
