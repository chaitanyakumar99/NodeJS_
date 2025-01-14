import fs from 'fs'
import express from 'express'


let router=express.Router()


router.get('/read',(req,resp)=>{
   let num1=get_emp()
   resp.send(num1)

})

//create
router.post('/create',(req,resp)=>{
    let emp_data=req.body
    console.log(emp_data);
    let employee=get_emp()
    let flag=employee.find((emp)=>{
        return emp.id==emp_data.id

    })
    if(flag){ 

        return resp.json({"Error":"Employee Alredy exit...!"})

    }
    employee.push(emp_data)
    saveEmployee(employee)
    return resp.send("msg sucessfully created")
})





let saveEmployee=(emp)=>{
    fs.writeFileSync('data.json',JSON.stringify(emp))
}


let get_emp=(()=>{
    let employee=fs.readFileSync('data.json','utf-8')
    return JSON.parse(employee)
})

export default router