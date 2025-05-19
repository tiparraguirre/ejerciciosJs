function esMatrizValida(matriz) {
	if (!Array.isArray(matriz)) return false;

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

function numCuantasVeces(matriz, num) {
	let contador = 0
	const fila = matriz.length

	for (let f = 0; f < fila; f++) {
		for (let c = 0; c < matriz[f].length; c++) {
			if (matriz[f][c] === num) {
				contador += 1
			}
		}
	}

	return contador
}

function respuesta(n) {
	if (n > 0) {
		return `el numero esta ${n} veces`
	} else {
		return `el numero esta ${n} veces`
	}
}
function mensajeError() {
	return "La Matriz no es Valida"
}


function ejericio5(matriz, num) {
	if (esMatrizValida(matriz)) {
		let n = numCuantasVeces(matriz, num)
		return respuesta(n)
	} else {
		return mensajeError()
	}

}

let matriz = [
	[1, 2, 3, 4, 5],
	[5, 6, 7, 8, 8]
]
console.log(ejericio5(matriz, 8));
