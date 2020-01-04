var http = require('http')
var fs = require('fs')

var myReadStrem = fs.createReadStream(__dirname + '/readMe.txt','utf8')
var myWriteStrem = fs.createWriteStream(__dirname + '/writeMe.txt')

myReadStrem.pipe(myWriteStrem)