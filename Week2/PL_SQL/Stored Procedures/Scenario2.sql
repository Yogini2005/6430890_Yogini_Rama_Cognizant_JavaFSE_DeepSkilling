-- Stored Procedure to update bonus
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    dept_id IN NUMBER,
    bonus_percent IN NUMBER
) AS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * bonus_percent / 100)
    WHERE department_id = dept_id;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to department: ' || dept_id);
END;
/

-- Execute the procedure with 10% bonus for department 10
BEGIN
    UpdateEmployeeBonus(10, 10);
END;
/