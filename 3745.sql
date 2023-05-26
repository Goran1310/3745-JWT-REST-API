CREATE DATABASE JWTUsers;
GRANT ALL PRIVILEGES ON JWTUsers.* TO 'ProjectAdmin'@'localhost';

CREATE USER 'ProjectAdmin'@'localhost' IDENTIFIED BY '';
GRANT ALL PRIVILEGES ON JWTUsers.* TO 'ProjectAdmin'@'localhost';