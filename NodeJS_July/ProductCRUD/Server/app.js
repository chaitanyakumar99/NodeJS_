import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from'cors'
import chalk from 'chalk'
import productRouter from './routes/productRouter.js'


let app=express()
app.use(express.json())
app.use(urlencoded({extended:true}))

app.use(cors())

app.use(morgan('dev'))

dotenv.config({path:'./config/config.env'})

let port=process.env.port
let host=process.env.host
let dburl=process.env.mongo

app.get("/",(req,resp)=>{
    resp.send("server - Root Req")
})


app.use("/products",productRouter)
mongoose.connect(dburl)
.then(()=>{
    console.log("mongodb connection successfull..!");
    app.listen(port,host,(err)=>{
     console.log(chalk.green(`server is running http://${host}:${port}/`));
    })
})
.catch((err)=>{
    process.exit(1)
})

