import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import dotevn from 'dotenv'
import apiRouter from './routes/apiRouter.js'

let app = express();

//read the form data/post from the body data

app.use(express.json())/

//load env variable values 
// dotevn.config({ 'path': "./config/dev.env" })

dotevn.config({path: './config/dev.env'})

let port = process.env.PORT;
let host = process.env.HOSTNAME;

//enable HTTP Request Logger - middleware
app.use(morgan('common'))

//create app - root request
//URL:  http://127.0.0.1:8082/
app.get("/", (req, resp) => {
    return resp.json({ "msg": "Application Root Req" })
})

//forward all the api - related request to apiRouter
app.use("/api", apiRouter)


app.listen(port, host, (err) => {
    if (err) throw err
    console.log(chalk.bgGreen(`Server is Running on http://${host}:${port}/`))
})