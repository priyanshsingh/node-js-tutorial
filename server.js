const http = require('http');
[]
const server = http.createServer((req, res) => {
    console.log(req.url, req.method); 

    // Set header content type for the response
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hemlo Darkness');
    res.end();
}); 

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests of Port 3000');
});