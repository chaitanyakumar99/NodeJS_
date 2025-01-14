import fs from 'fs'
import express from 'express'

let router = express.Router()

router.get('/read', (req, resp) => {

    let num = get_emp()
    resp.send(num)

})

// update


router.put("/update/:id", async (req, resp) => {
    let emp_Id = req.params.id
    let emp_Obj = req.body;
    let employees = await getEmployees()
    let emp = employees.find((emp) => {
        return emp.id == emp_Id
    })
    if (!emp) {
        return resp.status(200).json({ "msg": "Employee Not Exits" })
    }
    let remaining_Employees = employees.filter((emp) => {
        return emp.id !== emp_Id;
    })
    remaining_Employees.unshift(emp_Obj)
    saveEmployees(remaining_Employees)
    return resp.status(401).json({ "msg": "Employee Object updated Successfully" })

})


let saveEmployees = (e1) => {
    fs.writeFileSync('data.json', JSON.stringify(e1))
}

let get_emp = (() => {
    let employee = fs.readFileSync('data.json', 'utf-8')
    return JSON.parse(employee)
})

export default router             