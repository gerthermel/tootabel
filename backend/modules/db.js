const mysql = require('mysql');
const util = require('util');
const config = require('config');
const process = require('process');

var options = {
    user: config.get('db_user'),
    password: config.get('db_password'),
    database: config.get('db_database'),
    timezone: 'UTC',
};
if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
    options.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}
const db = mysql.createPool(options)

db.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})

db.query = util.promisify(db.query)

module.exports = db;
