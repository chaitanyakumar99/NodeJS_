import express, { json } from 'express'
import fs from 'fs'

let router=express.Router()



router.get("/read",async(req,resp)=>{
    let emp= await getEmployees()
    resp.status(200).json(emp)
    

})


let saveEmployees=(emp)=>{}

let getEmployees=()=>{
   let emp=fs.readFileSync('data.json','utf-8')
   return JSON.parse(emp)
}


export default router 


