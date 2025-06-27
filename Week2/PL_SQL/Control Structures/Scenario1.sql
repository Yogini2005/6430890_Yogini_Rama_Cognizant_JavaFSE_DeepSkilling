DECLARE
  CURSOR cur_customers IS
    SELECT customer_id, age
    FROM customers;

BEGIN
  FOR cust IN cur_customers LOOP
    IF cust.age > 60 THEN
      UPDATE loans
      SET interest_rate = interest_rate - 1
      WHERE customer_id = cust.customer_id;

      DBMS_OUTPUT.PUT_LINE('1% interest discount applied for customer ID: ' || cust.customer_id);
    END IF;
  END LOOP;

  COMMIT;
END;
/