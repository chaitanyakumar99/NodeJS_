const http = require('http')
const fs = require('fs')
const { url } = require('inspector')
let server = http.createServer((req, resp) => {
    //console.log(req.url)
    const url=req.url;
    if (url.includes("index")) fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) throw err
        resp.end(data)
    }); else if (url.includes("about"))
        fs.readFile('about.html', 'utf-8', (err, data) => {
            if (err) throw err
            resp.end(data)
        }); else if (url.includes("contact"))
        fs.readFile('contact.html', 'utf-8', (err, data) => {
            if (err) throw err
            resp.end(data)
        }); else if (url.includes("services"))
        fs.readFile('services.html', 'utf-8', (err, data) => {
            if (err) throw err
            resp.end(data)
        });
    else resp.end("path not found ")
})

server.listen(8080, '127.0.0.1', (err) => {
    if (err) throw err
    console.log(`Server is Running http://localhost:8080/index `)
})