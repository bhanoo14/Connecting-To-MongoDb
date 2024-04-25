import mysql from 'mysql'

// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10, // maximum number of connections in the pool
    host: 'localhost',
    user: 'root',
    password: 'Bhanoo123#@',
    database: 'mydatabase'
});

console.log(`now I am connected to mySQL`);

// Execute a query
pool.query('SELECT * FROM student', (error, results, fields) => {
    console.log("I think COnnection is success");
    if (error) {
        console.error('I am getting Error Here:', error);
        return;
    }
    console.log('Query results:', results);

    pool.end();
});

// Close the connection pool when done
