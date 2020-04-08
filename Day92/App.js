var events = require('events');
var util = require('util');

var Person = function(name){
this.name = name
};

util.inherits(Person, events.EventEmitter);
var anjali = new Person('anjali');
var akash = new Person('akash');

var people = [anjali, akash];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ' said: ' + msg);
    });
});

anjali.emit('speak','hey');

