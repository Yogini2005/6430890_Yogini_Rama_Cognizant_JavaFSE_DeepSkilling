DECLARE
  CURSOR cur_customers IS
    SELECT customer_id, balance
    FROM customers;

BEGIN
  FOR cust IN cur_customers LOOP
    IF cust.balance > 10000 THEN
      UPDATE customers
      SET is_vip = 'TRUE'
      WHERE customer_id = cust.customer_id;

      DBMS_OUTPUT.PUT_LINE('Customer ID ' || cust.customer_id || ' promoted to VIP.');
    END IF;
  END LOOP;

  COMMIT;
END;
/