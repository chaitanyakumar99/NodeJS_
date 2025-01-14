import http from 'http'

import dotenv from 'dotenv'

dotenv.config({path:'./config/app.env'})

let port=process.env.PORT
let hostname=process.env.HOST_NAME

let server=http.createServer((req,resp)=>{
    resp.end("Server is Runnning ..!")
})

server.listen(port,hostname,(err)=>{
    if (err) throw err
    console.log(`server is working...http://${hostname}:${port}`);
})

