const fs = require('fs');

const readStream = fs.createReadStream('../docs/blog4.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('../docs/blog5.txt')

readStream.on('data', (chunk) => {
    console.log("\n**************NEW CHUNK*****************\n");
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})