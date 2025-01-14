import express from 'express'
import dotenv from 'dotenv'
import router from './server/routes/router.js'



let app=express()

app.use(express)




let port=process.env(port)
let host=process.env(host)