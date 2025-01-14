import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import apiRouter from './Routes/apiRouter.js'

//create express app

let app=express()

//load confirgation values

dotenv.config({path:'./config/product.config'})

//http longer
app.use(morgan('tiny'))

let port=process.env.port
let host=process.env.host


app.get("/",(req,resp)=>{
    resp.json({"msg":"RootRequest"})
})

app.use("/api",apiRouter);

app.listen(port,host,(err)=>{
    if(err)throw err
    console.log(`server is Running http://${host}:${port}/`)
})