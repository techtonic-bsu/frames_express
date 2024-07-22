const Signup = require('./EncodingModel')
const mongoose=require('mongoose')

const createEncoding=async(req, res)=>{
    try {
        const signup= await Signup.create(req.body)
        res.status(200).json({message:signup})
    } catch (e) {
        res.status(400).json({error:e.message})
    }
}
const getEncoding=async(req, res)=>{
    res.status(200).json({message:"success get"})
}

module.exports={createEncoding, getEncoding}