import express from 'express'
import EmployeeModel from '../model/EmployeeModel.js'
//create express router for implemening routing
let router = express.Router();
//Employee Router Root Request
//API: http://127.0.0.1:8080/emp/
router.get("/", (req, resp) => {
    return resp.json({ "message": "Employee Router - Root Req" })
})
/*
Usage: featch all employees
API URL: http://127.0.0.1:8080/emp/read/
Method Type:GET
Req Fields:
Access Type:Public
*/

router.get("/read", async (req, resp) => {
    try {
        let employees = await EmployeeModel.find();
        return resp.json(employees)

    } catch (err) {
        return resp.json({ "message": err.message })
    }
})


/*
Usage: featch all employees
API URL: http://127.0.0.1:8080/emp/create/
Method Type:POST
Req Fields:
Access Type:Public
*/

router.post("/create", async (req, resp) => {
    try {
        let emp_data = req.body
        console.log(emp_data);

        let emp_obj = await EmployeeModel.findOne({ 'eid': emp_data.eid })
        console.log(emp_obj);
        if (emp_obj) {
            return resp.json({ "message": "Employee Already exits" })
        }
        let employee = new EmployeeModel(emp_data)
        employee = await employee.save();
        console.log(employee)
        return resp.json({ "msg": "New employee created" })
    } catch (err) {
        return resp.json({ "message": err.message })
    }
})

/*
Usage: featch all employees
API URL: http://127.0.0.1:8080/emp/update/
Method Type:PUT
Req Fields:
Access Type:Public

*/

router.put("/update/:emp_Id", async (req, resp) => {
    try {
        let emp_Id = req.params.emp_Id;
        
        // console.log(update_Emp_info)
        let emp_obj = await EmployeeModel.findOne({ 'eid': emp_Id })
        console.log(emp_obj)
        if (!emp_obj) {
            return resp.json({ "message": "Employee Not Extis" })
        }
        let update_Emp_info = req.body;
        let x = await EmployeeModel.findByIdAndUpdate(emp_obj._id, update_Emp_info )
        console.log("value", x)
        return resp.json({ "message": "Updated Successfully" })
    }
    catch {
        return resp.json({"error":err.message})

    }
})


/*
Usage: featch all employees
API URL: http://127.0.0.1:8080/emp/delete/
Method Type:DELETE
Req Fields:
Access Type:Public
*/


router.delete("/delete/:emp_Id", async (req, resp) => {
    try {
        let emp_Id = req.params.emp_Id;
        let emp_obj = await EmployeeModel.findOne({ "eid": emp_Id });
        if (!emp_obj) {
            return resp.json({ "message": "Employee Not Exits" })
        }
        console.log(emp_obj)
        emp_obj = await EmployeeModel.findByIdAndDelete(emp_obj._id)
        return resp.json({ "msg": "Deleted Succcessfully", "Deleted Emp": emp_obj })

    } catch (err) {
        return resp.json({ "error": err.message })
    }
})

export default router;

