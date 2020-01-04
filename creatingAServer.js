var http = require('http')

var server = http.createServer(function(req, res){
    console.log('Request was made: '+req.url)
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('Hey')
})

server.listen(3000, '127.0.0.1')
console.log('Now listening to port 3000')