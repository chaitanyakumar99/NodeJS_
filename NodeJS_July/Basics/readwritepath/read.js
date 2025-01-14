import fs from 'fs'

import path from 'path'

let file_Name=path.join(process.cwd(),"in","bng","one",'emp.txt')

fs.readFile(file_Name,'utf-8',(err,data)=>{
    if (err) throw err
    console.log(data);
})