const express = require("express");
const { append } = require("express/lib/response");
const morgan = require("morgan")

const PORT = process.env.PORT || 5000;

const index = express();
index.use(express.json());
index.use(morgan("tiny"));

index.get('/', (req, res) => {
    console.log(`Hitting /`);
    res.json({
        'message':'success'
    })
})

index.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`Server started on ${PORT}`);
})