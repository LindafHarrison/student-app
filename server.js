const express = require("express")
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const studentController = require('./db/studentController')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb://user:password@ds147589.mlab.com:47589/lindasstudents').then(() => console.log("connected")).catch((err) => {
   console.log(err)
})

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/addStudent', studentController.createStudent)

app.listen(3000, () => {console.log("listening on port 3000")})