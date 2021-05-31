// [START server]
const express = require('express');
const config = require('config');
const session = require('express-session');
const sess = require('./middleware/session');
const app = express();
var http = require('http').Server(app);
const router = express.Router();
const path = require('path');
//var MySQLStore = require('express-mysql-session')(session);
const MongoStore = require('connect-mongo');
const io = require('socket.io')(http);
app.set('io', io);
const cron = require("node-cron");
const nodemailer = require('nodemailer');
const dateFormat = require('dateformat');
const fs = require('fs');
const process = require('process');
const cookieParser = require('cookie-parser')
const RedisStore = require('connect-redis')(session);
var db = require('./modules/mongodb');
const mongoose = require('mongoose');





io.on('connection', (socket) => {

    socket.on('disconnect', function(){
    });

    socket.on('join', function (data) {
        console.log('Joining room: '+data.room)
        socket.join(data.room);
    });
    
    socket.on('leave', function (data) {
        console.log('Leaving room: '+data.room)
        socket.leave(data.room);
    });
});

process.on('uncaughtException', function (exception) {
    console.log(exception); // to see your exception details in the console
    // if you are on production, maybe you can send the exception details to your
    // email as well ?
});

Object.defineProperty(global, '__stack', {
    get: function(){
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack){ return stack; };
        var err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__line', {
    get: function(){
        return __stack[1].getLineNumber();
    }
});

var now = dateFormat(new Date(), "dd-mm-yyyy");
app.use("/tootabel/public", express.static(path.join(__dirname, 'public')));
/*
if(true){
    config.sessPass = 'cascada';
    config.db_host = 'localhost';
    config.db_user = 'root';
    config.db_password = '';
    config.db_database = 'tootabel';
}else{
    if( !config.get('sessPass') ){
        console.log('Session password has not been set');
        process.exit(1);
    }
    if( !config.get('db_host') ){
        console.log('db_host has not been set');
        process.exit(1);
    }
    if( !config.get('db_user') ){
        console.log('db_user has not been set');
        process.exit(1);
    }
    if( !config.get('db_password') ){
        console.log('db_password has not been set');
        process.exit(1);
    }
    if( !config.get('db_database') ){
        console.log('db_database has not been set');
        process.exit(1);
    }
}

var options = {
    host: config.get('db_host'),
    user: config.get('db_user'),
    password: config.get('db_password'),
    database: config.get('db_database'),
    timezone: "UTC+0"
};
if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
    options.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}


var sessionStore = new MySQLStore(options);
app.use(
    session({
        unset:'keep',
        key: 'sessionStorage',
        store: sessionStore,
        secret: config.get('sessPass'), 
        saveUninitialized: false, 
        resave: true,
        name: 'nolifeSession',
    })
)

*/

app.use(session({
    secret: 'foo',
    store: MongoStore.create(
      {
        mongoUrl:`mongodb://localhost:27017/tootabel`,
        ttl: 14 * 24 * 60 * 60,
      }
    )
  }));
const cors = require('cors');
app.use(cors({
    origin: [
        'http://localhost:4200',
        'http://localhost:27017',
        'http://localhost:8080',
        'https://nolife.appspot.com/',
        'https://nolife.gg',
        'http://nolife.gg'
    ], 
    credentials: true
    })
);

const mongoUrl = 'mongodb://localhost/tootabel';
const dbName = 'tootabel';
mongoose.connect(mongoUrl,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
app.use(sess)
app.use('/tootable/auth', require('./routes/auth'));
app.use('/tootable/create-account', require('./routes/create-account'));
app.use('/tootable/company', require('./routes/company'));
app.use('/tootable/table', require('./routes/table'));

const port = process.env.port || 8080; //8080
http.listen(port, function(){
    console.log('listening on *:'+port);
});



  
// [END server]


