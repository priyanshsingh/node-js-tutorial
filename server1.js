const http = require('http');
const fs  = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method); 

    // Set header content type for the response
    res.setHeader('Content-Type', 'text/html');
    
    // send html file
    fs.readFile('./views/index.html', (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    })
}); 

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests of Port 3000');
});