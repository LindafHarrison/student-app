const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema ({
    name: {type: String, required: true},
    age: {type: Number, required: true}
})

const StudentModel = mongoose.model('StudentModel', studentSchema)

module.exports = StudentModel
