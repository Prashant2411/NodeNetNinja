var http = require('http')
var fs = require('fs')

var myReadStrem = fs.createReadStream(__dirname + '/readMe.txt','utf8')
myReadStrem.on('data',function(chunk){
    console.log("New Chunk Received: ")
    console.log(chunk)
})