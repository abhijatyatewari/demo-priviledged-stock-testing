/**
 * Created by Ramkumar on 12/19/2015.
 */

var http = require('http');
var os = require('os');
var util = require('util');
var express = require('express');
var expressjwt = require('express-jwt');
var bodyparser = require('body-parser');
var sio = require('socket.io');

var customerRouter = require('./routing/customer-routing');
var orderRouter = require('./routing/order-routing');
var authRouter = require('./routing/userprofile-routing');

var portNumber = process.env.PORT_NUMBER || 9090;
var hostName = os.hostname();
var message = util.format(
    'REST Service available at http://%s:%d/api/[customers/orders]',
    hostName, portNumber);

globalSecretKey = process.env.GLOBAL_SECRET_KEY || "GSCORP, BANGALORE";

var app = new express();
var server = http.createServer(app);

sioimpl = sio.listen(server);
sioimpl.on('connection', function (socketClient) {

    var socketId = Math.floor(Math.random() * (100000 - 1) + 1);

    socketClient.id = socketId;

    console.log('Socket Client ... ' + socketClient.id + ' Connected ...');

    socketClient.on('disconnect', function () {
        console.log('Socket Client ... ' + socketClient.id + ' Disconnected ...');
    });
});

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Credentials', 'true');
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    next();
});

app.use(function (error, request, response, next) {
    var HTTP_UNAUTHORIZED = 401;

    if (error && error.constructor.name === 'UnauthorizedError') {
        response.send(HTTP_UNAUTHORIZED).send('Authorization Failed!');
        return;
    }

    next();
});

 app.use('/api/customers', expressjwt({
     secret: globalSecretKey
 }));
 app.use('/api/orders', expressjwt({
     secret: globalSecretKey
 }));

app.use(bodyparser.json());
app.use('/api/customers', customerRouter);
app.use('/api/orders', orderRouter);
app.use('/authenticate', authRouter);
// app.use('/', express.static(__dirname + "/../build/"));

server.listen(portNumber);

console.log(message);