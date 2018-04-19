const mongoose = require('mongoose')
const studentModel = require('./studentModel')
const bodyParser = require('body-parser')

const studentController = {
    createStudent: (req, res, next) => {

        StudentModel.create ({ 
            name: req.body.name,
            age: req.body.age
        }, {
            function (err) {
                console.log(handleError(err))
                if (err) return handleError(err)
            }
        })
        

        
    }

}

module.exports = studentController


//  (req, res) => {
//     res.send(req.body)
// }