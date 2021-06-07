const http = require('http');
[]
const server = http.createServer((req, res) => {
    console.log(req.url, req.method); 

    // Set header content type for the response
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hemlo Darkness</H3>');
    res.write('<p>Hemlo Darkness</p>');
    res.end();
}); 

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests of Port 3000');
});