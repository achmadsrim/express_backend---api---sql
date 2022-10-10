const mysql = require('mysql')

const konek = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'backend_api',
    user: 'root',
    password: ''
})

module.exports = konek