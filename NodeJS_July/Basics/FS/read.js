

const fs= require('fs') // ES5

let data= fs.readFileSync("data.txt", "utf-8");
console.log(data);
