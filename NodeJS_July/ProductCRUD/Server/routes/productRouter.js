import express from 'express'
import product from '../model/product.js';

let router = express.Router();

/*
url:http://127.0.0.1:8080/product/
*/

router.get("/", (req, resp) => {

    resp.json({ "msg": "Product -Root Request" })

});

/*  usage: get all products
    URL:http://127.0.0.1:8080/products/
    MEthod:GET
    Fields:none
    Access Type:public
*/

router.get("/read", async (req, resp) => {
                                                                                                       
    try {
        let products = await product.find()
        return resp.status(200).json(products)
    }
    catch (err) {
        return resp.status(401).json({ "msg": err.message })
    }
})

/*
    URL:http://127.0.0.1:8080/products/
    MEthod:POST
    Fields:none
    Access Type:public

*/

router.post("/create", async (req, resp) => {
    try {
        let emp = req.body;
        let Employee = await product.findOne({ name: emp.name })
        console.log(Employee);
        if (Employee) {
            return resp.status(200).json({ "msg": "Employee created sucessfully...!" })
        }
        Employee = product(emp)
        console.log(Employee);
        await Employee.save();
        return resp.status(401).json({ "msg": "Employee created sucessfully" })
    }
    catch (err) {
        return resp.status(401).json({ "error message": err.message })
    }
})

/*
    URL:http://127.0.0.1:8080/products/
    MEthod:PUT
    Fields:none
    Access Type:public

*/

router.put("/update/:id", async (req, resp) => {
    try {
        let emp = req.params.id;
        console.log(emp);
        let Emp = req.body
        console.log(Emp);
        let Employee = await product.findOne({ name: emp })
        console.log(Employee);
        if (!Employee) {
            return resp.status(200).json({ "msg": "Employee Not Exits" })
        }
        await product.findByIdAndUpdate(Employee._id, { $set: { name: Emp.name, image: Emp.image, price: Emp.price, qty: Emp.qty, info: Emp.info } })
        return resp.status(401).json({ "msg": "Employee Updated sucessfully" })
    }
    catch (err) {
        resp.status(401).json({ "msg": err.message })
    }
});

/*
    URL:http://127.0.0.1:8080/products/delete:Id
    MEthod:Delete
    Fields:none
    Access Type:public

*/

router.delete("/delete/:id",async (req,resp)=>{

    try{

    let p_Id=  req.params.id;
    let Product= await product.findOne({name:p_Id})
    if(!Product){
        return resp.status(401).json({"msg":"product not exits"})
    }
     await product.findByIdAndDelete(Product._id)
     return resp.status(200).json({"msg":"product deleted sucessfully"})
    }

    catch(err){
      return resp.status(200).json({"msg":err.msg})
    }

})


/*
router.get();     -read
router.post();    -create
router.put();     -put 
router.delete();  -delete
*/


export default router