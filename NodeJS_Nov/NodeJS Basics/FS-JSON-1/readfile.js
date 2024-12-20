//read file

import fs from 'fs'

fs.readFile('data.json','utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
    console.log(typeof data)
})