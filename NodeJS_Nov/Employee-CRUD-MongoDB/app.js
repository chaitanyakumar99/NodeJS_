import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'  //for creating the models and providing the data base,mongodb connection
import morgan from 'morgan'      //display the api data in terminal
import chalk from 'chalk'
import cors from 'cors'          //cors is used for security purpose
import empRouter from './routes/employeeRouter.js'

//create express app

let app = express();
//configure and load application setting
dotenv.config({ 'path': './config/dev.env' })
let port = process.env.PORT;
let host = process.env.HOST_NAME;

let mongodb_local_url = process.env.MONGODB_URL;

//read form data or postman body data
app.use(express.json())
//enable http request logger middleware
app.use(morgan('dev'))
//enable cors
app.use(cors())
//application root req
/*
API URL: http://127.0.0.1:8080
// 

Method Type:GET
*/
app.get("/", (req, resp) => {
    return resp.json({ "message": "Application Root Request" })
})


//forward emp related api to empRouter file 
app.use("/emp", empRouter);
//connect to mongodb
mongoose.connect(mongodb_local_url)
    .then((response) => { console.log("MongoDB connnection Successfull") })
    .catch((err) => { console.log(err) })
//create app and listen
app.listen(port, host, (err) => {
    if (err) throw err
    console.log(chalk.bgGreen(`Server is Running... http://${host}:${port}/ `))
})