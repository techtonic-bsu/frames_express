const mongoose = require("mongoose");
const Schema= mongoose.Schema

const encodingSchema= new Schema({
    code: {
        type:String,
        required: true
    },
    encoding:{
        type:Schema.Types.Mixed
    }
},{id:true, timestamps:true})

module.exports=mongoose.model('encodings', encodingSchema)