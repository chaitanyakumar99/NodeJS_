import express from "express";
import EmployeeModel from '../model/emp.js'
let router = express.Router();

//URL:localhost:8080/emp/
//Method:GET

router.get("/", (req, resp) => {

    resp.status(200).json({ "msg": "Employee Root Request" })
})

//URL:localhost:8080/emp/read
//GET:GET

router.get("/read", async (req, resp) => {
    try {
        let employees = await EmployeeModel.find();
        return resp.status(200).json(employees);
    }
    catch (err) {
        return resp.status(401).json({ "msg": err.message })
    }

})


/*
    URL:localhost:8081/emp/create
    Method: POST
    Req Fields: eid,ename,esal
*/
router.post("/create", async (req,resp)=>{
    console.log("Test Case 123");
    let emp = req.body;
    console.log(emp);
});


//update
//Method type:_PUT
//URL: http://localhost:8080/emp/update/1

router.put("/update/:id",async(req,resp)=>{
    try{
            let emp_Id = req.params.id;
            console.log(emp_Id)
            let emp=req.body;
            console.log(emp)
            let Emplooye=await EmployeeModel.findOne({"eid":emp_Id})
            console.log(Emplooye)
            if(!Emplooye){
                    return resp.status(401).json({"msg":"Employee Not Exits"})
            }
            await EmployeeModel.findByIdAndUpdate(Emplooye._id,{$set:{ename:emp.ename,esal:emp.esal}});
            return resp.status(200).json({"msg":"Employee Updated Successfully"})
    }
    catch(err){
        return resp.status(401).json({"err":err.message})
    }
})

export default router;