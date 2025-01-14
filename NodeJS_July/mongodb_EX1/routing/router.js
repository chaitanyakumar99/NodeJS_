import express from 'express'
import model from '../models/emp.js'

let router = express.Router();


//Method:GET 


router.get('/', (req, resp) => {
    resp.send("msg: Employee root request")
})

router.get('/read', async (req, resp) => {
    try {
        let employee = await model.find()
        return resp.status(200).json(employee)
    }
    catch (err) {
        return resp.status(401).json({ "err": err.msg })
    }
})

//usage:create new employee_data
//Method:POST



router.post('/create', async (req, resp) => {
    try {
        let emp = req.body
        let employee = await model.findOne({ eid: emp.eid })
        console.log(employee);
        if (employee) {
            return resp.status(200).json({ "msg": "Employee already exits" })
        }
    }

    catch (err) {
        return resp.status(401).json({ "err msg": err.msg })
    }
})

//usage:update employee_data
//Method:PUT

router.put('/update/:id', async (req, resp) => {
    try {
        let emp = req.body
        console.log(emp);
        let emp_Id = req.params.eid
        console.log(emp_Id);
        let employee=await model.findOne({"eid":emp_Id})
        console.log(employee);
        if(!employee){
         return resp.status(200).json({"msg":"Employee not Exits"})
        }
        await model.findByIdAndUpdate(employee._eid,{$set:{ename:emp.ename,eal:emp.esal}});
        return resp.status(200).json(({"msg":"Employee updated sucessfully"}))
    }
    catch (err) {
        return resp.status(200).json({"err":err.message})
    }
})


//usage:Delete employee_data
//Method:DELETE

router.delete('/delete/:id', (req, resp) => {
try{
    try{
        let emp_Id = req.params.id;
        console.log(emp_Id)
        let Employee  =await EmployeeModel.findOne({eid:emp_Id})
        console.log(Employee)
        if(!Employee){
          return resp.status(401).json({"msg":"Employee Not Exists"})
        }
        await EmployeeModel.findByIdAndDelete(Employee._id);
        return resp.status(200).json({"msg":"Employee Document Deleted Sucessfully"})
      }
}
catch(err){
    
}
})

export default router

