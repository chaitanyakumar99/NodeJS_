import express from 'express'

let app = express()

app.get('/', (req, resp) => {

    resp.send("Hello GM......!")
})

app.get("/about", (req, resp) => {
    resp.end('server is running....')
})






app.listen(8080, '127.0.0.1', (err) => {
    if (err) throw err
    console.log(`server is running`)
})