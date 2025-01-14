
import express from 'express'

let router=express.Router()


router.put('/update',(req,resp)=>{
    resp.send("getting the update req")
})


router.delete('/delete',(req,resp)=>{
    resp.send("getting the delete req")
})


export default router 
