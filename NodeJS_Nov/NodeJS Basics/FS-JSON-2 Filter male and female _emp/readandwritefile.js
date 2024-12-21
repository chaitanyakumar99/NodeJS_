import fs from 'fs'

// store male and female emp in seperate file

fs.readFile('data.json','utf-8',(err,data)=>{
    if (err) throw err
    let emps=JSON.parse(data)
    console.log(data)

let male_emp=[]
let female_emp=[]

for(emp of emps){
    if (user.gender==='Male') {
        male_emp.push(emp)
    }

}

    fs.writeFile('male.json',data,(err)=>{

    })
})