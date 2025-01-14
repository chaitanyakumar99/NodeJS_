import express from 'express'
import dotenv from 'dotenv'
import router from './router/router.js'

let app=express()

app.use(express.json())

dotenv.config({path:'./config/config.env'})

let port=process.env.port
let host=process.env.host

app.get('/',(req,resp)=>{
    resp.send("server created..!")
})


app.use('/hi',router)
app.listen(port,host,(err)=>{
    if(err) throw err
console.log(`server created http://${host}:${port}/`);
})