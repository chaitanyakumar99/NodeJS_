import http from 'http'

const server = http.createServer((req, resp) => {
    resp.end("Hello... Good Morning123")

});


server.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server is runninig on http://localhost:${8080}`)
})

