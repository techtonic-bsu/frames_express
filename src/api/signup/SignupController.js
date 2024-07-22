const Signup = require('./SignupModel')
const mongoose=require('mongoose')

const createUser=async(req, res)=>{
    try {
        let user=req.body
        const encoding={code: user.code, encoding:user["encoding"]}
        delete user["encoding"]

        const exists=await Signup.findOne({code:user.code})
        if(!exists){
            const signup= await Signup.create(user)
            res.status(200).json({message:signup})
        }
        else{
            res.status(400).json({message:"Code already exists"})
        }
        
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}
const getUser=async(req, res)=>{
    res.status(200).json({message:"success get"})
}

// const separateEncoding=(req)=>{
//     let keys=Object.keys(req)
//     let last=keys[keys.length-1]
//     const encoding={encoding:req.body[last]}
//     keys.pop()
//     let user={}
//     keys.map((key)=>user[key]= req.body[key])
//     return [user, encoding]
// }
module.exports={createUser, getUser}