const Signup = require('./SignupModel')
const mongoose=require('mongoose')

const createUser=async(req, res)=>{
    try {
        const signup= await create(req.body)
        res.status(200).json({message:"success post"})
    } catch (e) {
        res.status(400).json({error:e.message})
    }
}
const getUser=async(req, res)=>{
    res.status(200).json({message:"success get"})
}

module.exports={createUser, getUser}