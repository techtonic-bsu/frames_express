// imports
const dotenv=require('dotenv').config()
const express=require('express')
const app=express()
const mongoose= require('mongoose')
const cors=require('cors')
const jwt=require('jsonwebtoken')
const routes=require('./src/api/routes')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(express.static('public'))


// routes
app.use('/api/v1', routes);
const port=process.env.PORT || 10000

mongoose.connect(process.env.MDB_URI)
.then(()=>{
    app.listen(port, ()=>{
        console.log(`[FRAMES] Started on port ${port}`);
    })
}).catch((e)=>{ 
    console.log("there's an error connecting to database");
})