import express from 'express'
import path from 'path'

let app=express()

app.get("/",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"staticweb","index.html"),(err)=>{
        if(err) throw err
    })
})

app.get("./about",(req,resp)=>{
    resp.end(path.join(process.cwd(),"staticweb","about.html"),(err)=>{
        if(err) throw err
    })
})


app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`Express server is Running`);
})