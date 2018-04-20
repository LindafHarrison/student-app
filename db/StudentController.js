const mongoose = require('mongoose')
const studentModel = require('./studentModel')
const bodyParser = require('body-parser')

const studentController = {
    createStudent: (req, res, next) => {

        studentModel.create ({ 
            name: req.body.name,
            age: req.body.age
        },
        function (err, student) {
            if (err) {res.status(418).send(err)}
            else {res.json(student)};
        })
    }, 

    findStudent: (req, res, next) => {
        studentModel.findOne({
            name: req.params.name,
        },  
        function (err, data) {
            if (err) res.status(404).send(err)
            else res.json(data)
        })
    },

    updateStudent: (req, res, next) => {
        studentModel.findOneAndUpdate({
            _id: req.body._id,
        },{
            age: req.body.age,
        },
        function (err, student) {
            if (err) res.status(404).send(err)
            else res.json(student)
        })
    },

    allStudents: (req, res, next) => {
        studentModel.find ({}, 
        function (err, students) {
            if (err) res.status(404).send(err)
            else res.json(students)
        })
    },

    deleteStudent: (req, res, next) => {
        studentModel.findOneAndRemove({
            _id: req.body._id
        }, (err, student) => {
            if (err) {res.status(404).send(err)}
            else {res.json(student)}
        }
    )}
}

module.exports = studentController
