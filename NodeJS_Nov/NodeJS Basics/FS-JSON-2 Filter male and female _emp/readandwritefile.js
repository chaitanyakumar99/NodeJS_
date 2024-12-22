import fs from 'fs'

// store male and female emp in seperate file

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) throw err
    let emps = JSON.parse(data)
    console.log(data)

    let male_emp = []
    let female_emp = []

    for (let emp of emps) {
        if (emp.gender === 'Male') {
            male_emp.push(emp)
        }
        if(emp.gender ==='Female'){
            female_emp.push(emp)
        }

    }

    fs.writeFile('male.json', JSON.stringify(male_emp), (err) => {
        if (err) throw err
        console.log("New json file is created")
    })
    fs.writeFile('feamale.json',JSON.stringify(female_emp),(err)=>{
        if(err) throw err
        console.log("New Female file is created")
    })
})