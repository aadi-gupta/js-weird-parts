function greeting(language) {
	
	return function(firstName,lastName){

		if (language == 'en') {
			return 'Hello ' + firstName + ' ' + lastName;
		}

		if (language == 'es') {
			console.log('Hola ' + firstName + ' ' + lastName);
		}

	}

}

let greetEngish = greeting('en');
let greetSpanish = greeting('es');

console.log(greetEngish('Kyle','Mooney'));
 greetSpanish('Kyle','Mooney');