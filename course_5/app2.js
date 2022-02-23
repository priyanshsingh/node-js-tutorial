const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000

const app2 = express();
app2.use(morgan("tiny"));

app2.get("/", (req, res) => {
    console.log(`Hitting /`);
    res.json({
        "message" : "success",
        "message 2" : "success2"
    }); 
});

app2.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});