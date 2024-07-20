const express= require('express')
const router= express.Router()
const jwt= require('jsonwebtoken')
require('dotenv').config()

router.get("/list", fetchUsers)
router.post("/login", loginUser)

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
