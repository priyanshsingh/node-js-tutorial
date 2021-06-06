const fs = require('fs');

const readStream = fs.createReadStream('./File System Test Files/BlogSt.txt', 'utf-8');
const writeStream = fs.createWriteStream('./File System Test Files/BlogSt1.txt')

// readStream.on('data', (chunk) => {
//     console.log('-----New Chunk-----');
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk); 
// }); 

//Piping 
readStream.pipe(writeStream);