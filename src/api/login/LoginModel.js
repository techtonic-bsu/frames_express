const mongoose = require("mongoose");
const Schema= mongoose.Schema

const userSchema= new Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    code: {
        type:String,
        required: true
    },
    department: {
        type:String,
    },
    program:{
        type:String,
    },
    role:{
        type:String,
        required: true
    },
},{id:true, timestamps:true})

module.exports=mongoose.model('users', userSchema)