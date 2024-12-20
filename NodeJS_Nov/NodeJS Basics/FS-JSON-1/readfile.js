// import fs from 'fs'

// fs.readFile('data.json', 'utf8', (error, data) => {
//     if (error) throw error
//     console.log(typeof data)
// })


//read file

import { log } from 'console'
import fs from 'fs'

fs.readFile('data.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
    console.log(typeof data)
})