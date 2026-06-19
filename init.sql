CREATE DATABASE IF NOT EXISTS online_bank;

USE online_bank;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    account_number VARCHAR(20),
    balance DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT,
    amount DECIMAL(10,2),
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(username,password)
VALUES
(
'alice',
'$2b$10$rwmPmJXdcJ7iUNe1X96GCuTVlLf1K6GvYSF0FUNSGjZj8DP/2PFhy'
),
(
'chuks',
'$2b$10$LRfHAp9w58GSuDW./foPqOZlKDPq07K.t2nCx6ISmuSYw8rq2p.re'
);

INSERT INTO accounts(user_id,account_number,balance)
VALUES
(1,'100001',5000),
(2,'100002',3000);

INSERT INTO transactions(account_id,amount,description)
VALUES
(1,2500,'Salary Credit'),
(1,-120.50,'Electricity Bill'),
(1,-35,'Coffee Shop'),
(2,1000,'Freelance Payment'),
(2,-75,'Internet Subscription');