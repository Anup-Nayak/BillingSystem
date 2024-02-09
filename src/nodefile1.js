const express = require('express');
const mysql = require('mysql');
const cors= require('cors')

const app = express();
const port = 3000; // Or any port you prefer

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Rohit@8704',
    database: 'mydatabase'
});

// Middleware to parse JSON bodies
app.use(cors());  
app.use(express.json());

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const { contractNo, contractName } = req.body;

    // Insert data into the database
    pool.query('INSERT INTO mahindra (contractNo, contractName) VALUES (?, ?)', [contractNo, contractName], (error, results) => {
        if (error) {
            console.error('Error saving data:', error);
            res.status(500).send('Error saving data');
        } else {
            console.log('Data saved successfully');
            res.status(200).send('Data saved successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});