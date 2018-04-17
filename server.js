const express = require("express")
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/addStudent', (req, res) => {
    res.send(req.body)
})

app.listen(3000, () => {console.log("listening on port 3000")})