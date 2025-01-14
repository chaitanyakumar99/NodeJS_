import express from 'express'

let router=express.Router()

router.get('/read',(req,resp)=>{
    resp.send("getting the get req")
})

router.post('/create',(req,resp)=>{
    resp.send("getting the post req")
})

export default router 




