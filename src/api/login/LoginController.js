const Login= require('./LoginModel')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()

const loginUser=async(req, res)=>{
    const {email, password}= req.body
    try {
        const login=await Login.findOne({email})
    } catch (error) {
        
    }
}