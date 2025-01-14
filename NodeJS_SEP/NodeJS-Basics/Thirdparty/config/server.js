import http from 'http'
import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config({'path': './config/dev.config'})

let port=process.env.port
let host_name=process.env.host_name

let server=http.createServer((req,resp)=>{
    resp.end('server is running')
})