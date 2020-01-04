var fs = require('fs')

//var read = fs.readFileSync('readMe.txt','utf8') // Sync Method... Will not proceed until completed
fs.readFile('readMe.txt','utf8',function(err, data){
    fs.writeFile('writeMeAsync.txt','data')
    console.log(data)
})// fs.readFile for Async
//fs.unlink('writeMe.txt') //to delete file
console.log("I am faster")
fs.writeFileSync('writeMe.txt','Hi')
