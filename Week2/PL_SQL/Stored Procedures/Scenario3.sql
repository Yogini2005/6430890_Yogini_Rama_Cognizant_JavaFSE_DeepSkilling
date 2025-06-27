-- Stored Procedure to transfer funds
CREATE OR REPLACE PROCEDURE TransferFunds (
    source_account_id IN NUMBER,
    destination_account_id IN NUMBER,
    amount IN NUMBER
) AS
    source_balance NUMBER;
BEGIN
    -- Lock the source account row and check balance
    SELECT balance INTO source_balance
    FROM accounts
    WHERE account_id = source_account_id
    FOR UPDATE;

    IF source_balance < amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
    END IF;

    -- Deduct from source
    UPDATE accounts
    SET balance = balance - amount
    WHERE account_id = source_account_id;

    -- Add to destination
    UPDATE accounts
    SET balance = balance + amount
    WHERE account_id = destination_account_id;

    DBMS_OUTPUT.PUT_LINE('Transferred ' || amount || ' from account ' || source_account_id || ' to ' || destination_account_id);

    COMMIT;
END;
/

-- Execute the procedure (transfer 1000 from 201 to 202)
BEGIN
    TransferFunds(201, 202, 1000);
END;
/

-- Check updated balances
SELECT * FROM accounts;