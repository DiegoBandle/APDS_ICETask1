import http from "http"

const PORT = 3000

const server = http.createServer((reg, res) => {
    res.end('We are making this work')
})

server.listen(PORT)