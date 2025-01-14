import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import empRouter from './routing/router.js'

//create express app
let app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use("/emp",empRouter);

app.get("/",(req,resp)=>{

    resp.status(200).json({"msg":"Root Request"})
})
dotenv.config({path:'./config/dev.env'})

let port=process.env.port 
let host=process.env.host

//let dburl=process.env.MONGO_LOCAL_URL

//connecting mongodb using moongoose
// connect to Mongo DB Database
mongoose.connect(process.env.mongo_local_url, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then((response) => {
    console.log(`Connected to Mongo DB Successfully...........`);
}).catch((err) => {
    console.error(err);
    process.exit(1);  
});


app.listen(port,host,(err)=>{
    console.log(`Server Running! http://${host}:${port}/`)
})