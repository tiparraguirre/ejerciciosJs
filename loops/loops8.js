function factorial(numero) {
	if (isNaN(numero)) {
		console.log("no es numero");

	} else {

		let ref = 1
		let factorial = 1
		for (let i = 0; i < numero; i++) {
			ref = numero - i

			factorial = factorial * ref
		}

		console.log(factorial);






	}
}
factorial(10)