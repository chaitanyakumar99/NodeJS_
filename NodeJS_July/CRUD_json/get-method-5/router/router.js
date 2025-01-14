import express from 'express'
import fs from 'fs'


let router = express.Router

app.use(express.json())

app.get('/read',async (req, resp) => {
    let emp_data = req.body
    console.log(emp_data);
})

app.post('/create', async (req, resp) => {
    let emp_data = req.body
    console.log(emp_data);

    
    let flag =employees.find((emp)=>{
        return emp.eid === emp_Data.eid
    })
    console.log("Flag Value....",flag)
    if(flag){
        return resp.json({"Error":"Employee Alread exist!"})
    }
    employees.push(emp_Data)
    await saveEmployees(employees);
    return resp.status(200).json({"msg":"new Employee Object created successfully!"})

})


export default router