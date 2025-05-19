function perfectNum(numero) {

	let contador = 0
	for (let i = 1; i <= numero - 1; i++) {
		if (numero % i == 0) {
			contador = contador + i
		}
	}
	if (contador == numero) {
		return true

	}
	else {
		return false

	}

}

function generarPerfect(n) {
	let perfects = []
	let numer = 2
	while (perfects.length < n) {
		if (perfectNum(numer)) {
			perfects.push(numer)

		}
		numer++
	}
	console.log(perfects);



}
generarPerfect(2)