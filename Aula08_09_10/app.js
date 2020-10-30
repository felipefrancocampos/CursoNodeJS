const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Hello!")
})

app.get("/", function(req, res){
    res.send("Bem vindo a minha pagina sobre!")
})

app.get("/", function(req, res){
    res.send("Bem vindo ao meu blog!")
})

app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("<h1> Ola "+req.params.nome+"</h1>"+"<h2> Seu cargo e: "+req.params.cargo+"</h2>"+"<h3> Sua cor favorita</h3>")
})



app.listen(8081, function(){console.log("Servidor Rodando!")})