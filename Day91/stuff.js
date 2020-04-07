var counter = function(arr){
    console.log("There are " + arr.length + " number of elements in the array");
};


var adder = function(a,b){
    return `The sum of two numbers is ${a+b}`;
};

// module.exports = adder;
var pi = 3.142;

module.exports = {
    counter:counter,
    adder:adder,
    pi:pi
};