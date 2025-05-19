

function esPrimo(num) {
	if (num < 2) {
		return false
	}
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false
		}


	}
	return true
}



function generarPrimos(n) {
	let primosN = []
	let numero = 2
	while (primosN.length < n) {
		if (esPrimo(numero)) {
			primosN.push(numero)

		}
		numero++
	}
	console.log(primosN);



}
generarPrimos(3)