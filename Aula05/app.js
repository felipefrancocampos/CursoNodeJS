var http = require('http')

http.createServer(function(req, res){
    res.end("Hello World! Welcome to website!")
}).listen(8081)

console.log("O servidor esta rodando!")