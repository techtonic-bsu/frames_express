const express= require('express')
const router= express.Router()
const jwt= require('jsonwebtoken')
require('dotenv').config()
const {createHistoryIn, createHistoryOut} = require('./HistoryController')

// router.get("/list", fetchUsers) // check if encodings/account already exists
router.post("/in", createHistoryIn) //signup users
router.post("/out", createHistoryOut) //signup users


module.exports=router