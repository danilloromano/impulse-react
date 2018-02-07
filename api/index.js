
var app = require('./config/express-config.js')();
var http = require('http').Server(app);
var porta = process.env.PORT || 8080;

http.listen(porta, function(){
  console.log('Servidor rodando');
});