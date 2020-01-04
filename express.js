var express = require('express')

var app = express()

app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html')
})
app.get('/contact',function(req, res){
    res.sendFile(__dirname + '/contact.html')
})
app.get('/profile/:name',function(req, res){
    res.send("You requested name to be visited of " + req.params.name)
})

app.listen(3000)