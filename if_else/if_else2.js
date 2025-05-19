function divisibleFive(num) {
	if (num % 5 == 0) {
		let resultado = num / 5;
		console.log("divisible", resultado);
	} else {
		console.log("no divisible");


	}

}
divisibleFive(123);