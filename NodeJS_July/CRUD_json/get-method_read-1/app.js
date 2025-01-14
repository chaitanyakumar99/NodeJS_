import express from 'express'
import dotenv from 'dotenv'
import router from './router/router.js'

let app=express()
app.use(express.json())
app.use('/user',router)

dotenv.config({path:'./config/dev.env'})

let port=process.env.PORT
let host=process.env.HOST

// app.get('/',(req,resp)=>{
//     resp.send("hi hello this from windows")
// })

app.listen(port,host,(err)=>{
    if (err) throw err
    console.log(`server created sucessfully http://${host}:${port}/`);
})