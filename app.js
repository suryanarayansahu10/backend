const express =require('express')
const app=express()

app.get('/',(req,res)=>{
    req.json({
        message:'Hello Backend'
    })
})

app.listen(3000)