const mongoose = require("mongoose");
const Schema= mongoose.Schema

const occupantSchema= new Schema({
    code: {
        type:String,
        required: true
    },
    role:{
        type:String,
        required: true
    },
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    department: {
        type:String,
    },
    program:{
        type:String,
    }
},{id:true})

module.exports=mongoose.model('occupants', occupantSchema)