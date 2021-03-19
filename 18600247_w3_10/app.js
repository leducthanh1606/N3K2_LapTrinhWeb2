const express = require("express");
const bodyParser = require('body-parser');
const sumRouter = require("./routers/sum");
const expressLayouts = require('express-ejs-layouts');

const app = express();

//chạy body parser
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended:false})); 
app.use(express.static('public'));


//dùng ejs
app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/sum', sumRouter);


const port = process.env.PORT || 3000
console.log(`Server is listening on port ${port}`);
app.listen(port);