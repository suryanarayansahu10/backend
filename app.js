const express =require('express')
require("dotenv").config()

const app=express()

app.get('/',(req,res)=>{
    res.json({
        message:'Hello Backend third'
    })
})

app.get('/test',(req,res)=>{
    res.json({
        message:'This is test message'
    })
})

app.listen(process.env.PORT)
console.log(process.env.PORT)
