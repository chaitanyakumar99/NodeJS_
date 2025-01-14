import express from "express";
import product from '..modules/product.js'



let router=express.Router()
/*
url:http://170.0.1:8080/product/
*/

router.get("/",(req,resp)=>{
    resp.json({"msg":"Product root request"})
})

/*
Usage: get all products
url:http://170.0.1:8080/product/read
Method:Get
Fields:none
Access Type:public
*/

router.get("/read",async (req,resp)=>{
   try{
     let products=await product.find()
     return resp.status(200).json(products)
    }
   catch(err){
             return resp.status(401).json({"msg":err.msg})
   }
})

