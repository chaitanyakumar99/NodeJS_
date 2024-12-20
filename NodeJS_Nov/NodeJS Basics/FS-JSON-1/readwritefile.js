import fs from 'fs'
//read file

fs.readFile('data.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)

    //write file

    fs.writeFile('emp.json',data,(err)=>{
        if(err)throw err
        console.log("New Json file is created...!")
    })
})