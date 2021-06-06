//One of the built-in modules of Node.js can help uin the following processes of file handling i.e. fs module
const fs = require('fs');

// Read
// fs.readFile('./File System Test Files/Blog.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })
// console.log('Last Line');

//Write
// fs.writeFile('./File System Test Files/Blog.txt', 'Hello, Light', () => {
//     console.log('File was written!!!');
// });

// fs.writeFile('./File System Test Files/Blog2.txt', 'Hello, GOD', () => {
//     console.log('File was written!!!');
// });

// fs.writeFile('./File System Test Files/Blog3.txt', 'Hello, Son', () => {
//     console.log('File was written!!!');
// });

// fs.writeFile('./File System Test Files/Blog4.txt', 'Hello, Bete', () => {
//     console.log('File was written!!!');
// });

//Directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//         console.log(err);
//         }
//         console.log('Folder Created !!!');
//     }); 
// }
// else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder Deleted');
//     })
// }


//Delete files
if(fs.existsSync('./File System Test Files/deleteMe.txt')){
    fs.unlink('./File System Test Files/deleteMe.txt', (err) => {
        if(err)
        {
            console.log(err);
        }
        console.log('File Deleted');
    })
}