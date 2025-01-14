import http from 'http'
import path  from 'path'
import fs from 'fs'
import express from 'express'


//nodejs


// let server=http.createServer((req,resp)=>{
//     fs.readFile(path.join(process.cwd(),'data.txt'),'utf-8',(err,data)=>{
//         if (err) throw err
//         resp.end(data)
//     })
// })

//express

let server=express();
server.get('/',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'data.txt'),'utf-8',(err)=>{
        if(err) throw err
    })
})

server.listen(8080,'127.0.0.1',(err)=>{
    if (err) throw err
console.log(`serveer running http://localhost:8080/`);
})