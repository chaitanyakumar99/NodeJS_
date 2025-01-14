import router from 'roter'


router.delete("/delete/:id",async (req,resp)=>{
    //how to read url data - using req.params.id
    let emp_Id = req.params.id;
    console.log(emp_Id)
    let employees= await getEmployees()
    console.log(employees.length)

    let flag=employees.find((emp)=>{
        return emp.eid == emp_Id;
    })
    console.log(flag)
    if(!flag){
        return resp.status(401).json({"msg":"Employee Not Exist!"})
    }
    let remaining_Employees=employees.filter((emp)=>{
        return emp.eid !=emp_Id;
    })
    saveEmployees(remaining_Employees)
    return resp.status(200).json({"msg":"Employee record Deleted Succesfully!"})
})