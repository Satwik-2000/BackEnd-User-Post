const { Client } = require('pg');
const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgresql",
    database: "userpostdemo"
})

client.on("connect", () => {
    console.log("Database Connected Successfully!");
})

client.on("end", () => {
    console.log("Database Connection Closed!")
})

module.exports = client;