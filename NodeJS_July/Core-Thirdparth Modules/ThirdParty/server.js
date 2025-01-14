// const http=require('http')

// const dotenv=require('dotenv')

// dotenv.config({path:'./config/dev.env'})

// let port=process.env.PORT
// let host_Name=process.env.HOST_NAME

// let server=http.createServer((req,resp)=>{
//     resp.end("Http server.....")
// })

// server.listen(port,host_Name,(err)=>{
//     if(err) throw err;
//     console.log(`server Running on http://${host_Name}:${port}/`);
// })

const http = require ('http')
const dotenv= require('dotenv')
dotenv.config({path:'./config/dev.env'})
let port = process.env.PORT
let hostname=process.env.HOST_NAME
// console.log(port);
// console.log(hostname);
let server= http.createServer((req,resp)=>{
    resp.end("Http server.........!!");
})
server.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log(`serveris running http://${hostname}:${port}/`)
})