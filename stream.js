const fs = require('fs');

const readStream = fs.createReadStream('./File System Test Files/BlogSt.txt');

readStream.on('data', (chunk) => {
    console.log('-----New Chunk-----');
    console.log(chunk);
});