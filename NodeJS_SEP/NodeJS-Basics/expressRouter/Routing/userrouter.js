import express from  'express'
import userRouter from './'

let router=express.Router();

// Method:get(read)

router.get("/read",(req,resp)=>{
    resp.end("user - read requset")
})

  // Method:post(read)

router.get("/post",(req,resp)=>{
    resp.end("user - update requset")
})


