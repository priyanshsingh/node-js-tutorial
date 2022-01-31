const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

app.get('/', (req, res) => {
    console.log(`Hitting /`);
    res.json({
        'message': 'Success'
    })
});

app.get('/about/:type/:subCat', (req, res) => {
    console.log('req.params :>> ', req.params);
    
    const {type, subCat} = req.params;
    console.log(`Hitting /about`);
    res.json({
        'type': type,
        'subCat' : subCat
    })
});

app.get('/search', (req, res) => {
    console.log('req.query :>> ', req.query);
    
    const {keyword, limit} = req.query;
    console.log(`Hitting / about`);
    res.json({
        'keyword':keyword,
        'limit':limit
    })
});

app.post('/login', (req, res) => {
    console.log('req.body :>> ', req.body);    
    const {name, phone_no, email} = req.body;

    
    // const {keyword, limit} = req.query;
    console.log(`Handling POST`);
    res.json({
        name, phone_no, email
    })
});



app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`Server started on ${PORT}`);
});