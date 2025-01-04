import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

//create express
let app =express();

app.use(cors())
app.use(morgan('tiny'))
dotenv.config({'path':'./config/dev.env'})
let port = process.env.PORT;
let host= process.env.HOST_NAME;
let mongodb_URL=process.env.MONGODB_LOCAL_URLe
//create Application Root Request

//URL:http://127.0.0.1:8085/
app.get("/",(req,resp)=>{
    return resp.json({"message":"Welcome to User Module - JWT - root req"})
})

mongoose.connect(mongodb_URL)
.then((resp)=>{
    console.log("MongoDB Connection success")
})
.catch((err)=>{console.log(err.message)})

//server - configuration using listen
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(chalk.bgGreen(`Server is running.. http://${host}:${port}/`))
})