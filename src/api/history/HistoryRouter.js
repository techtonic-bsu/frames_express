const express= require('express')
const router= express.Router()
const jwt= require('jsonwebtoken')
require('dotenv').config()
const {getHistory, getHistoryByDepartment, createHistoryIn, createHistoryOut} = require('./HistoryController')

router.get("/", getHistory) 
router.get("/:department", getHistoryByDepartment) 


router.post("/in", createHistoryIn) 
router.post("/out", createHistoryOut) 


module.exports=router