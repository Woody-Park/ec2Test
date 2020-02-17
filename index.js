const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('hello node-server');
});




app.listen(5000, () => {
    console.log('start sever on 5000')
});