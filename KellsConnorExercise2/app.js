const http = require('http');

// Server will listen on port 8080 at localhost
const port = 8080;
const host = "localhost";

const server = http.createServer((req, res) => {
    console.log('method', req.method);
    console.log('url', req.url);
    console.log('headers', req.headers);
});

server.listen(port, host, () => {
    console.log('message here')
});