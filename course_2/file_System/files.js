const fs = require('fs');
//  reading files
    fs.readFile('./docs/blog1.txt', (err, data) => {
        if(err){
            console.log(err);
        }
        console.log(data.toString());
    })
    console.log("last line");

//  writing files
    fs.writeFile('./docs/blog2.txt', 'hello, world', () => {
        console.log("File is written");
    })
    
    fs.writeFile('./docs/blog3.txt', 'hello, again', () => {
        console.log("File is written");
    })


//  directories
    if(!fs.existsSync('./docs/newFolder1')){
        fs.mkdir('./docs/newFolder1', (err) => {
            if(err){
                console.log(err);
            }
            console.log("New folder created!");
        })
    }
    else{
        fs.rmdir('./docs/newFolder1', (err) => {
            if(err){
                console.log(err)
            }
        })
        console.log('Folder deleted!');
    }

//  deleting files
    if(fs.existsSync('./docs/deleteme.txt')){
        fs.unlink('./docs/deleteme.txt', (err)=>{
            if(err)
            {
                console.log(err);
            }
            console.log("File deleted!");
        })
    }