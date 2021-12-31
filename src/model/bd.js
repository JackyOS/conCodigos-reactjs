const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "ortea"

    // host:process.env.SMTP_HOST,
    // port:process.env.SMTP_PORT,
    // auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    // }
});
// Conecto nuestro proyecto con la base de datos

pool.query = util.promisify(pool.query);

module.exports = pool;


