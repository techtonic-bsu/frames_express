const Occupant = require('./OccupantModel')
const mongoose=require('mongoose')

const createOccupant=async(req, res)=>{
    try {
        const occupant= await Signup.create(req.body)
        res.status(200).json({message:signup})
    } catch (e) {
        res.status(400).json({error:e.message})
    }
}
const deleteOccupant=async(req, res)=>{
    try {
        const occupant= await Signup.create(req.body)
        res.status(200).json({message:signup})
    } catch (e) {
        res.status(400).json({error:e.message})
    }
}

module.exports={createUser, getUser}