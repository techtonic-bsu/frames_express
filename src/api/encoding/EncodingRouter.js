const express= require('express')
const router= express.Router()
const jwt= require('jsonwebtoken')
require('dotenv').config()
const {createEncoding, getEncoding} = require('./EncodingController')

// router.get("/list", fetchUsers) // check if encodings/account already exists
router.post("/", createEncoding) //signup users
router.get("/", getEncoding) //signup users

module.exports=router