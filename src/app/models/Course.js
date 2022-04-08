const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema ({
    name :{type: String, default: ''},
    age : {type: Number, default:18},
    gender: {type: String, default: ''},
    hobby: {type: String, default: ''},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    
})

module.exports = mongoose.model('Course',Course)