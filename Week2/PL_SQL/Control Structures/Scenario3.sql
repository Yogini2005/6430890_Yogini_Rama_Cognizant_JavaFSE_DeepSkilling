DECLARE
  CURSOR cur_loans IS
    SELECT l.loan_id, l.customer_id, l.due_date, c.name
    FROM loans l
    JOIN customers c ON l.customer_id = c.customer_id
    WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
  FOR loan_rec IN cur_loans LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan_rec.loan_id || 
                         ' for Customer ' || loan_rec.name || 
                         ' is due on ' || TO_CHAR(loan_rec.due_date, 'DD-MON-YYYY'));
  END LOOP;
END;
/