// Function statement
function greet(name) {
	console.log('Hola ' + name);
};

greet('John');

// Function expression
var greets = function(name){
	console.log('Hola ' + name);
};
greets('Tim');

// Immediately Invoked Function Expression
var greeting = function(name){
	console.log('Hola ' + name);
}('Tom');


var firstName = 'Kyle';
var lastName = 'Mooney';

(function(firstName,lastName){
	console.log('Hola ' + firstName + ' ' + lastName);
}(firstName, lastName));
