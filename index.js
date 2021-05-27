// Estructura de inicio de servidor con http
/*const http = require('http');

http.createServer((req,res) => {
    res.end("Hello Word");
}).listen(5050);*/


//Estructura de inicio de servidor con express
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

// conexion a la base de datos MongoDB

const {url } = require('./src/config/database');

mongoose.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

/*mongoose.connect(
    "mongodb+srv://AndersonLlano:1234567890@clusterlland.f9gdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
),*/


//settings
app.listen(5050, () => {
    console.log("Servidor Inicializado");
    console.log('El Nombre de la App:', app.get('appName'));
});
app.set('appName', 'Mi First Server');
app.set('json spaces', 2);

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

/*app.get('/', (req, res) => {
    res.render('index.ejs');
});*/

//middlewares
/*app.use(function(req, res, next){
    console.log('request url:' + req.url);
    next();
});*/

//otras configuraciones de morgan: short, dev, common, tiny, combined...
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended : false }));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.json());
/*app.use(session({
    secret: 'MuerteMax',
    resave: false,
    saveUninitialized: false,
}));*/
//app.use(passport.initialize);
//app.use(passport.session);
//app.use(flash());

//lotes o rutas

//{{{require('./src/Routes')(Routes, passport);

app.use("/People", require("./src/Routes/People"));
app.use("/NoVaccine", require("./src/Routes/NoVaccine"));
app.use("/Affiliate", require("./src/Routes/Affiliate"));
//app.use("/passport", require("./src/config/passport"));
//app.use("/", require("./src/views/index.ejs"));

// staics files

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.end('Bienvenidos a MuerteMax... Nuestro servicio es usted, por favor ingrese al slash /afiliado');
    
});

app.get('/login', (req, res) => {
    res.end('Aquí va el login!');
});



app.get('*', (req, res) => {
    res.end('File Not Found!');
});


module.exports = app;