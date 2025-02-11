// const fs =require('fs')
// //Synchronous
// let data =fs.readFileSync('data.txt','utf-8')
// console.log(data);

import fs from 'fs'

//ASynchronous

let data=fs.readFile('data.txt','utf-8',(err,data)=>{
if (err)throw err
console.log(data);
})

