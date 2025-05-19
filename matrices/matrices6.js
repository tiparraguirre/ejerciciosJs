function ejericio6(matriz) {
	if (esMatrizCuadrada(matriz)) {
		let sumaDiag = sumarDiagonal(matriz)
		return sumaDiag
	} else {
		return "La matriz no es cuadrada"
	}
}

function esMatrizCuadrada(matriz) {
	const fila = matriz.length

	for (let f = 0; f < fila; f++) {
		if (matriz[f].length !== fila) {
			return false
		}
	}

	return true
}

function sumarDiagonal(matriz) {
	let suma = 0
	const fila = matriz.length

	for (let f = 0; f < fila; f++) {
		suma += matriz[f][f]
	}

	return suma
}


let matriz = [
	[1, 2, 3],
	[1, 2, 3],
	[1, 4, 5]
]
console.log(ejericio6(matriz));
