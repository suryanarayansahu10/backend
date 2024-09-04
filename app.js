const express =require('express')
const app=express()

app.get('/',(req,res)=>{
    res.json({
        message:'Hello Backend second'
    })
})

app.get('/test',(req,res)=>{
    res.json({
        message:'This is test message'
    })
})

app.listen(4000)
