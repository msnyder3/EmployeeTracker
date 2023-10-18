const mysql = require('mysql2');


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employeeTracker'
    },
    console.log('Connected to the employeeTracker database.')
);

module.exports = db;