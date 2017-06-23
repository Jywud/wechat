var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./routes');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', process.env.PORT || "8083");
app.use('/public', express.static(path.join(__dirname, '/public')));
// parse application/json  
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

//socketIO
io.on('connection', function(socket){

  console.log(socket.handshake.address);

  socket.on('message', function(msg){
    console.log('message: ' + msg);
    // socket.emit('message', 'server！！！');
    socket.broadcast.emit('message', msg); //发送给除了自己的其他人
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});

http.listen(app.get('port'), function () {
    console.log('You can debug your app with http://localhost:' + app.get('port'));    
});