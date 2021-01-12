const express = require("express")
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
        // console.log(result)
        res.send(result)
    })
})

dataRouter.post("/", (req, res, next) => {
    let sql = 'INSERT INTO avengers (`URL`,`Name/Alias`) VALUES("' + req.body.URL + '", "' + req.body.name + '");'
    connection.query(sql, (err, result) => {
        if(err) {
            throw err
        }
        let sql = 'SELECT * FROM avengers WHERE `URL` = "' + req.body.URL + '" AND `Name/Alias` = "' + req.body.name + '";'
        connection.query(sql, (err, result) => {
            if(err) {
                throw err
            }
            console.log(result[0])
            res.send(result[0])
        })
    })
})

dataRouter.put("/name/:name", (req, res, next) => {
    let sql = "UPDATE avengers SET `Name/Alias` = '" + req.body.name + "' WHERE `Name/Alias`='" + req.params.name + "';"
    connection.query(sql, (err, result) => {
        if(err) {
            throw err
        }
        let sql = "SELECT * FROM avengers"
        connection.query(sql, (err, result) => {
            if(err) {
                throw err
            }
            console.log(result)
            res.send(result)
        })
    })
})

dataRouter.put("/url/:url", (req, res, next) => {
    let sql = "UPDATE avengers SET `URL` = '" + req.body.URL + "' WHERE `URL`='" + req.params.url + "';"
    connection.query(sql, (err, result) => {
        if(err) {
            throw err
        }
        let sql = "SELECT * FROM avengers"
        connection.query(sql, (err, result) => {
            if(err) {
                throw err
            }
            console.log(result)
            res.send(result)
        })
    })
})

dataRouter.delete("/name/:name", (req, res, next) => {
    let sql = "DELETE FROM `avengers` WHERE `Name/Alias`='" + req.params.name + "';"
    connection.query(sql, (err, result) => {
        if(err) {
            throw err
        }
        console.log(result)
        res.send(result)
    })
})

dataRouter.delete("/url/:url", (req, res, next) => {
    let sql = "DELETE FROM `avengers` WHERE `URL`='" + req.params.url + "';"
    connection.query(sql, (err, result) => {
        if(err) {
            throw err
        }
        console.log(result)
        res.send(result)
    })
})

module.exports = dataRouter