function testing() {

	let arr = [];

	for (var i = 0; i < 4; i++) {
		let j = i;
		arr.push(
			function (){
				console.log(j);
			}
		)

	}
	return arr;
	//console.log(arr);
}
var test =  testing();
//console.log(test);
test[0]();
test[1]();
test[2]();

