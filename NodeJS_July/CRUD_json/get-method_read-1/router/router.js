import express from 'express'
import fs from 'fs'
 

let router=express.Router()

router.get('/read',(req,resp)=>{
  let   emp=get_emp()
  resp.status(200).json(emp)
})



let get_emp=()=>{

 let employee=fs.readFileSync('emp.json','utf-8') 
 return JSON.parse(employee)

}

export default router  