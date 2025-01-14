import fs from 'fs'


//sync
let sw=fs.readFileSync('data.txt','utf-8')
console.log(sw);

//asyncwt

fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data);
})
