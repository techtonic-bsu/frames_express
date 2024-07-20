const express= require('express')
const router= express.Router()
const jwt= require('jsonwebtoken')
require('dotenv').config()
const {createUser, getUser} = require('./SignupController')

// router.get("/list", fetchUsers) // check if encodings/account already exists
router.post("/", createUser) //signup users
router.get("/", getUser) //signup users

// function authenticateToken(req, res, next){
//     const authHeader= req.headers['authorization']
//     const token= authHeader&& authHeader.split(' ')[0]
//     if(token==null) return res.status(401).json({"message":"not authorized"})

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
//         if(err) return res.sendStatus(403)
//         req.user=user
//     next()
//     })
// }

module.exports=router