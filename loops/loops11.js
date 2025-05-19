function perfectNum(numero) {

	let contador = 0


	for (let i = 1; i <= numero - 1; i++) {
		if (numero % i == 0) {
			contador = contador + i
		}
	}
	if (contador == numero) {
		console.log(" es perfecto");

	}
	else {
		console.log("no es perfecto");

	}

}
perfectNum(123)