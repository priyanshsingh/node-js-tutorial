const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    // 1. We set the header i.e., the type of content that is to be sent back by the server.
    res.setHeader('Content-Type', 'text/plain');

    res.write('Hello, guys...This is a response of the request made to the server!!!');

    res.end(); 
});

server.listen(3001, 'localhost', ()=>{
    console.log('listening to request on port 3000')
});