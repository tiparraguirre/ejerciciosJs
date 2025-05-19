
function esMatriz(matriz) {
	if (!Array.isArray(matriz)) {
		return false
	}

	for (let fila of matriz) {
		if (!Array.isArray(fila)) {
			return false
		}

		for (let numero of fila) {
			if (typeof numero !== 'number' || isNaN(numero)) {
				return false
			}
		}
	}

	return true;
}

function contarMatrices(matriz) {
	let contador = []
	const fila = matriz.length

	for (let f = 0; f < fila; f++) {
		for (let c = 0; c < matriz[f].length; c++) {
			contador.push([matriz[f][c]])
		}
	}

	return contador.length;
}

function cantidadElementos(cantidad) {
	return `hay ${cantidad} numeros `
}

function mensajeError() {
	return "No es una Matriz Validad o no es Matriz"
}

function ejercicio2(matriz) {
	if (esMatriz(matriz)) {
		let contador = contarMatrices(matriz)
		return cantidadElementos(contador)
	} else {
		return mensajeError()
	}
}


let matriz1 = [
	[1, 2, 3],
	[4, 5, 6]
]
console.log(ejercicio2(matriz1));
