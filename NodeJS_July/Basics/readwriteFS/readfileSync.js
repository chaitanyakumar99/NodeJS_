const fs = require('fs')

let emp=fs.readFileSync('emp.txt','utf-8')

fs.writeFileSync('data.txt',emp)

console.log("Employee data info ie data.txt");
