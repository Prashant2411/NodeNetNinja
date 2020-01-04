var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res){
    console.log('Request was made: '+req.url)
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        var myReadStrem = fs.createReadStream(__dirname + '/index.html')
        myReadStrem.pipe(res)
    }
    else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type':'text/html'})
        var myReadStrem = fs.createReadStream(__dirname + '/contact.html')
        myReadStrem.pipe(res)
    } 
    else if(req.url === '/api/batman') {
        res.writeHead(200, {'Content-Type':'text/html'})
        var myReadStrem = fs.createReadStream(__dirname + '/batman.html')
        myReadStrem.pipe(res)
    }       
    else if(req.url === '/api/prashant') {
        var prashant = [{
            name: 'Prashant',
            age: '22'
        },
        {
            name: 'Shazam',
            age: '13'
        }]
        res.writeHead(200,{'Content-Type':'application:json'})
        res.end(JSON.stringify(prashant))
    }
    else {
        res.writeHead(200, {'Content-Type':'text/html'})
        var myReadStrem = fs.createReadStream(__dirname + '/noPAge.html')
        myReadStrem.pipe(res)
    }
})

server.listen(3000, '127.0.0.1')
console.log('Now listening to port 3000')