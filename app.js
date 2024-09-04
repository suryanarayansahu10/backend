const express =require('express')
const app=express()

app.get('/api',(req,res)=>{
    res.json({
        message:'Hello Backend third'
    })
})

app.get('/api/test',(req,res)=>{
    res.json({
        message:'This is test message'
    })
})

app.listen(4000)
