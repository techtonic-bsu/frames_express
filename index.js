// imports
const dotenv=require('dotenv').config()
const express=require('express')
const app=express()
const mongoose= require('mongoose')
const cors=require('cors')
const jwt=require('jsonwebtoken')
const routes=require('./src/api/routes')

app.use(express.json())
app.use(express.static('public'))


// routes
app.use('/api/v1', routes);


mongoose.connect(process.env.MDB_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("connected to database");
    })
}).catch((e)=>{ 
    console.log("there's an error connecting to database");
})