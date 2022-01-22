const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(3001, 'localhost', ()=>{
    console.log('listening to request on port 3000')
});