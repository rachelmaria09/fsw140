const express = require("express")
// const { db, model } = require("../../../../fsw135/weekfive/models/comment")
const dataRouter = express.Router()
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Waylong1!",
    database: "avengers"
})

dataRouter.get("/", (req, res, next) => {
    let sql = `SELECT * FROM avengers`
    connection.query(sql, (err, result) => {
        if(err) {
            throw err
        }
        console.log(result)
        res.send(result)
    })
})

module.exports = dataRouter