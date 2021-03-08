// build your server here and require it from index.js
const express = require("express")
const helmet = require("helmet")


const server = express()
server.use(helmet())
server.use(express.json())


server.use((req,res,next)=>{
    res.json({message:"Welcome to the 4.2 sprint challenge, may the odds be ever in your favor."})
})


server.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).json({message:"Molly! You in danger girl!!"})
})

module.exports= server