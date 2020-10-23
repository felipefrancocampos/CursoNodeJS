var express = require("express")
var app = express()

app.get("/", function(req, res){
    res.send("Seja Bem-vindo ao meu app!")
})

app.get("/", function(req, res){
    res.send("Minha pagina sobre")
})

app.get("/", function(req, res){
    res.send("Bem vindo ao meu blog!")
})

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
})