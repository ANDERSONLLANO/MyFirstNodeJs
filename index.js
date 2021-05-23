// Estructura de inicio de servidor con http
/*const http = require('http');

http.createServer((req,res) => {
    res.end("Hello Word");
}).listen(5050);*/


//Estructura de inicio de servidor con express
const express = require('express');
const morgan = require('morgan');
const app = express();
//const mongoose = require('mongoose');
//const path = require('path');
//const passport = require('passport');
//const flash = require('flash');


/*mongoose.connect(
    "mongodb+srv://muertemax:0987654321@muertemax.59lwz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
),*/


//settings
app.listen(5050, () => {
    console.log("Servidor Inicializado");
    console.log('El Nombre de la App:', app.get('appName'));
});
app.set('appName', 'Mi First Server');
app.set('json spaces', 2);

//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

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
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
//lotes o rutas

app.use("/People", require("./src/Routes/People"));
app.use("/NoVaccine", require("./src/Routes/NoVaccine"));
app.use("/Affiliate", require("./src/Routes/Affiliate"));
//app.use("/index.ejs", require("./src/Routes/index.ejs"));


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