
## Installation

1. Clone or download the repository from GitHub to your local machine.
2. Set up a MySQL database by following the instructions in the README file under the "DATABASEACCESS" section. You will also need to create a database named "adoptiondb" and grant the appropriate privileges to the "dabcaowner" user.
3. Populate the database with the tables and data by running the SQL queries provided in the README file under the "DATAINSERTS" section.
4. Install the required dependencies by running the command `npm install` in the root directory of the project.
5. Start the application by running the command `npm start`.
6. To access the application, in a web browser navigate to http://localhost:3000.

## Environment Variables

- `ADMIN_USERNAME`: Specifies the admin account's username.
- `ADMIN_PASSWORD`: Specifies the admin account's password.
- `DATABASE_NAME`: Specifies the database name to be used.
- `DIALECT`: Specifies the dialect for Sequelize.
- `DIALECTMODEL`: Specifies the dialect module for Sequelize.
- `PORT`: Specifies the server port number.
- `HOST`: Specifies the server hostname.

## Additional Libraries/Packages

- `body-parser`: Middleware used for parsing HTTP request bodies.
- `connect-sqlite3`: For connecting to SQLite database.
- `cookie-parser`: For parsing cookies.
- `debug`: For debugging.
- `dotenv`: Environment variable management.
- `EJS`: Templating engine.
- `express`: Web framework.
- `express-session`: For managing user sessions.
- `http-errors`: For handling HTTP errors.
- `morgan`: Request logger middleware for Node.js.
- `mysql`: Version 2.18.1 for connecting to MySQL database.
- `mysql2`: Version 3.1.0 for connecting to MySQL database.
- `nodemon`: For automatically restarting the server.
- `passport`: For authentication.
- `passport-local`: For local authentication strategy.
- `sequelize`: Object Relational Mapping.
- `sqlite3`: For connecting to SQLite database.

## NodeJS Version Used

v19.7.0

## Database Access

1.  To use the MySQL data you provided, you need to first create a database named `JWTUsers` and grant all privileges to the user `ProjectAdmin` on that database. You can do this by running the following SQL commands in your MySQL client:

```
CREATE DATABASE JWTUsers;
GRANT ALL PRIVILEGES ON JWTUsers.* TO 'ProjectAdmin'@'localhost';
```

After that, you need to create a user `ProjectAdmin` with an empty password and grant all privileges to that user on the `JWTUsers` database. You can do this by running the following SQL commands:

```
CREATE USER 'ProjectAdmin'@'localhost' IDENTIFIED BY '';
GRANT ALL PRIVILEGES ON JWTUsers.* TO 'ProjectAdmin'@'localhost';
```

This will create the database and user with the necessary privileges to access the `JWTUsers` database.