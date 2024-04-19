
import fs from 'fs'
let data = fs.readFileSync('data.txt','utf-8')
console.log(data);

fs.writeFileSync('chai.txt',data)
console.log("written successfully");