const History = require('./HistoryModel')
const mongoose=require('mongoose')

// related functions



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
        if(history.matchedCount === 0){
            res.status(400).json({error:"History of entry doesn't exists"})
        }
        res.status(200).json({message:history})
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}
module.exports={createHistoryIn, createHistoryOut}