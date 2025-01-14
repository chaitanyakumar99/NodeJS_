import fs from 'fs'

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) throw err
    let users = JSON.parse(data)

    let male_users = []
    let female_users = []

    for (let user of users) {
        if (user.gender === "Male") {
            male_users.push(user)
        }
        if(user.gender==="Female"){
            female_users.push(user)
        }
    }

    fs.writeFile('male.json',JSON.stringify(male_users),(err)=>{
        if(err)throw err
        console.log("New Json file created")
    })
    fs.writeFile('female.json',JSON.stringify(female_users),(err)=>{
        if(err)throw err
        console.log("New Json file created")
    })
})