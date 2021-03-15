const express = require('express');

const app  = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.render('index');
});

const  port  = process.env.PORT || 3000;
console.log(`Server is listening on port ${port}`);
app.listen(port);
