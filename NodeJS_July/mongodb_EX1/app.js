import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './routing/router.js'

let app=express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

dotenv.config({path:'./config/config.env'})

let port=process.env.port
let host=process.env.host
let mongourl=process.env.mongourl



app.listen(port,host,(err)=>{
    console.log(`server created http://${host}:${port}/`);
})