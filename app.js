var events = require("events")

var util = require('util')

var Person = function(name){
    this.name = name
}

util.inherits(Person, events.EventEmitter);

var bruce = new Person('bruce')
var wayne = new Person('Wayne')

var people = [bruce,wayne]

people.forEach(function(Person) {
    Person.on('speak',function(msg){
        console.log(Person.name + " says " + msg)
    })
    Person.on('listen',function(msg){
        console.log(Person.name + " says " + msg)
    })
})

bruce.emit('speak',"Hi")
wayne.emit('listen',"Hello")
// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg){
//     console.log(msg)
// })

// myEmitter.emit('someEvent','The event was emitted.')