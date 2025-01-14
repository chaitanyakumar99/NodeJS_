import express from 'express'
import path from 'path'

// import dotenv from 'dotenv'

let app=express()



app.get('/',(req,resp)=>{
    resp.sendFile('');
})



app.listen(8080,(err)=>{
    if(err)throw err
    console.log("server is running...!")
})