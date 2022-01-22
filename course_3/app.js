const express = require("express");
const req = require("express/lib/request");
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;

const app = express();
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
    console.log(`Hitting /about`);
    res.json({
        'keyword':keyword,
        'limit':limit
    })
});



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});