import express from  'express'
import morgan from 'morgan'

let app=express()

app.get("/",(req,resp)=>)

app.listen(8080,"127.0.0.1",(err)=>{
    if(err)throw err
    console.log(`server is Running.... http://127.0.0.1/`)
})