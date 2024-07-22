const mongoose = require("mongoose");
const Schema= mongoose.Schema

const historySchema= new Schema({
    code: {
        type:String,
        required: true
    },
    timeIn:{
        type:Date
    },
    timeOut:{
        type:Date
    },
    
},{id:true, timeseries:true})

module.exports=mongoose.model('history', historySchema)