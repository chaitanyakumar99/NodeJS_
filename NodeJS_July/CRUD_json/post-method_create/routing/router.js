import express from 'express'
import fs from 'fs'

let app=express.Router()

app.get('/read',(req,resp)=>{
    let hi=get_emp()
    resp.send(hi)
})

// creating----------------------------------------

app.post('/create',(req,resp)=>{
let emp_data=req.body;
console.log(emp_data);
let employees=get_emp();
let flag=employees.find((emp)=>{
    return emp.id ==emp_data.id
})
if(flag){
    return resp.json({"Error":"Employee Alredy exit..!"})
}
employees.push(emp_data)
saveEmployee(employees)
return resp.send("msg sucessfully created")
})

// creating---------------------------------------------


let saveEmployee=(emp)=>{                          // write the file
fs.writeFileSync('data.json',JSON.stringify(emp))  // write the file
}

let get_emp=(()=>{
    let employee=fs.readFileSync('data.json','utf-8')
    return JSON.parse(employee)
})

export default app
