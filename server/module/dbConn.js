// Db connection
const mysql = require('mysql')
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: "mtn-chat-app"
})
conn.connect((err) => {
    if (err) console.log("Connection Timed Out!")
    console.log("Database Connected Successfully")  
})

module.exports = {
    conn
}