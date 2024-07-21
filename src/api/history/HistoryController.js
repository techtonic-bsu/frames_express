const History = require('./HistoryModel')
const mongoose=require('mongoose')


const getHistory=async(req, res)=>{
    try {
        const query= req.query.code ? {code:req.query.code} : {}
        const history = await History.find(query)
        res.status(200).json(history)
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}
const getHistoryByDepartment=async(req, res)=>{
    
}


const createHistoryIn=async(req, res)=>{
    try {
        const history= await History.create({...req.body, timeIn: new Date()})
        res.status(200).json({message:history})
        
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}
const createHistoryOut=async(req, res)=>{
    try {
        const history= await History.updateOne(
            {code:req.body.code, timeOut: null, },
            {$set:{timeOut: new Date()}},
            {upsert: true}
        )
        if(history.matchedCount === 0) res.status(400).json({error:"History of entry doesn't exists"})
        else res.status(200).json({message:history})
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}

module.exports={
    getHistory, getHistoryByDepartment,
    createHistoryIn, createHistoryOut
}