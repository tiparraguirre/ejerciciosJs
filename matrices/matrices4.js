function esMatrizValida(matriz) {
	if (!Array.isArray(matriz)) {
		return false;
	}

	for (let fila of matriz) {
		if (!Array.isArray(fila)) return false;
		for (let num of fila) {
			if (typeof num !== 'number' || !isFinite(num)) {
				return false;
			}
		}
	}
	return true;
}

function numMasGrande(matriz) {
	const fila = matriz.length
	let mayor = -Infinity

	for (let f = 0; f < fila; f++) {
		for (let c = 0; c < matriz[f].length; c++) {
			if (matriz[f][c] > mayor) {
				mayor = matriz[f][c]
			}
		}
	}

	return mayor
}

function errorMensaje() {
	return "No es una matriz Valida"

}

function ejercicio4(matriz) {
	if (esMatrizValida(matriz)) {
		let respuesta = numMasGrande(matriz)
		return respuesta
	} else {

		return errorMensaje()
	}

}
const matriz = [
	[234, 574, 234],
	[123, 123, 123, 324, , 345, 453]
]
console.log(ejercicio4(matriz));
