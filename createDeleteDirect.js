var fs = require('fs')

//fs.mkdirSync('createdDirec') Sync functions to create Direct
//fs.rmdirSync('createdDirec') Sync functions to delete Direct
// fs.mkdir('stuff',function(){ Async functions to create Direct
//     fs.readFile('readMe.txt','utf8',function(err, data){
//         fs.writeFile('./stuff/write.txt',data)
//     })
// })

fs.unlink('./stuff/write.txt')
fs.rmdir('stuff')