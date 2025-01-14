const http=requir('http')
const dotenv=require('dotenv')

dotenv.config({path:'./config/dev.env'})
let port=process.env.PORT
let host_Name=process.env.host_Name

console.log(port);
console.log(host_Name);