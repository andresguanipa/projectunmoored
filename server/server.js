require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const hbs = require('hbs');

const app = express();

let server = http.createServer(app);

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('../hbs/helpers');

const publicPath = path.resolve(__dirname, '../public');


const port = process.env.PORT || 3000;

app.use(require('./routes/users'));

app.use(express.static(publicPath));

app.set('view engine', 'hbs');


// IO = esta es la comunicación del backend 
module.exports.io = socketIO(server);
require('./sockets/socket');


mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});


server.listen(port, (err) => {

    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);

});