


import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'
import chalk  from 'chalk'

//create express app

let app = express()


app.use(morgan("dev"))

//load configuration env variable

dotenv.config({path:"./config/config.env"})
let port = process.env.PORT
let hostname=process.env.HOST_NAME

//create root req api
//url: http://localhost:8080/

app.get("/",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"web","index.html"),(err)=>{})
})
app.get("/index",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"web","index.html"),(err)=>{})
})
app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"web","about.html"),(err)=>{})
})
app.get("/services",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"web","services.html"),(err)=>{})
})
app.get("/contact",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"web","contact.html"),(err)=>{})
})


app.listen(port,hostname,(err)=>{
    if(err) throw err 
    console.log(chalk.bgYellow(`Server Running on http://${hostname}:${port}/`))
})