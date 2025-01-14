
const http = require('http')
const fs=require('fs')
let server=http.createServer((req,resp)=>{
    console.log(req.url)
    if(req.url ==="/index"){
        fs.readFile('index.html','utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    
    if(req.url ==="/about"){
        fs.readFile('about.html','utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url ==="/services"){
        fs.readFile('services.html','utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url ==="/contact"){
        fs.readFile('contact.html','utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    
   
})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Running http://localhost:8080/ `)
})