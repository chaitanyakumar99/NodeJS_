// import express from 'express'
// import morgan from 'morgan'
// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// import { car } from 'cars'
// import chalk from 'chalk'
// import cors from 'cors'

// let app = express()


// dotenv.config({ path: "./config/dev.env" })

// let port=process.env.port
// let host=process.env.host_name
// let mongodb_url=process.env.mongodb_url

// mongodb_url.connect(mongodb_url)

// app.listen(8080, '127.0.0.1', (err) => {
//     if (err) throw err
//     console.log('server is running')
// })

import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import mongoose from 'mongoose'
import dotevn from 'dotenv'
import cars from 'cars'

let app = express()

dotevn.config({path:'./config/dev.env'})
let port = process.env.port
let host= process.env.host_name
let mongodb_url=process.env.mongodb_url


mongoose.connect(mongodb_url)
    .then((resp)=>{
        console.log("MongoDB -Connection successfull!")
    })
    .catch((err)=>{})
    
app.get("/",(req,resp)=>{
    resp.send("Root Request!")
})

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Running!... http://${host}:${port}/`)
})