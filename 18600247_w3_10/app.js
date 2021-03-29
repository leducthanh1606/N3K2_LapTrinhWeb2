const express = require("express");
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const cookieSession = require('cookie-session')
const bcrypt  = require('bcrypt');

const authMiddlewares = require ('./middlewares/auth');
const sumRouter = require("./routers/sum");
const authRouter = require ("./routers/auth");


//lấy pass sau khi hash.
// const hash = bcrypt.hashSync('123456',10);
// console.log(hash);

const app = express();

//chạy session
app.use(cookieSession({
    name: 'session',
    keys: [process.env.PORT_KEY || 'secret'],
}))

app.use(authMiddlewares);

//chạy body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);
app.use(express.static('public'));


//dùng ejs
app.set('views', './views');
app.set('view engine', 'ejs');

app.use ('/auth', authRouter);
app.use('/sum', sumRouter);

//test session
// app.get('/view', function(req, res){
//     req.session.views = (req.session.views || 0 )  + 1;
//     res.send(`Ban da xem trang nay ${req.session.views} lan`);
// });

app.get('/', function(req, res){
    res.render('index', {title : 'Trang chủ '});
});

const port = process.env.PORT || 3000
console.log(`Server is listening on port ${port}`);
app.listen(port);