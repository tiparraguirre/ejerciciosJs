function primo() {
	let numero = parseInt(prompt("ingrese numero"))
	let divisores = []
	while (isNaN(numero) || numero < 3) {
		console.log("invalido, ingrese otro numero")
		numero = parseInt(prompt("ingrese de nuevo"))
	}
	for (let i = 1; i <= numero; i++) {
		if (numero % i == 0) {
			divisores.push(i)
		}
	}
	if (divisores.length == 2) {
		console.log(" esprimo");

	}
	else {
		console.log("no es primo");

	}


}





primo();