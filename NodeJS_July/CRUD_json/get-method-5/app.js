import express from 'express'
import dotenv from 'dotenv'

let app=express()

app.use(express.json())

let port=process.env.port
let host=process.env.host




app.listen(poet,host,(err)=>{
    console.log(`server created http://${host}:${port}`);
})