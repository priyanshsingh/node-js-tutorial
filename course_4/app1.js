const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

const app1 = express();
app1.use(morgan("tiny"));

app1.get('/', (req, res) => {
    console.log(`Hitting /`);
    res.json({
        'message' : 'success'
    });
});

app1.get('/about/:type/:subCat', (req, res) => {
    console.log('req.params :>> ', req.params);

    const {type, subCat} = req.params;
    console.log(`HItting /about`);
    res.json({
        'type' : type,
        'subCat' : subCat
    })
})

app1.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});