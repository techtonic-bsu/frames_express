const Signup = require('./HistoryModel')
const mongoose=require('mongoose')

const createUser=async(req, res)=>{
    try {
        const signup= await Signup.create(req.body)
        res.status(200).json({message:signup})
    } catch (e) {
        res.status(400).json({error:e.message})
    }
}
const getUser=async(req, res)=>{
    res.status(200).json({message:"success get"})
}

module.exports={createUser, getUser}