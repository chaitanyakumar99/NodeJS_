//ES5

const fs=require('fs')

const path=require('path')

let fscount=fs.readFileSync(path.join(__dirname,'emp','bangalore','data.txt'),'utf-8')

console.log(fscount);

