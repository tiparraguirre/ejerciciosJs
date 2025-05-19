function esMatrizValida(matriz) {
	if (!Array.isArray(matriz)) return false;

	for (let fila of matriz) {
		if (!Array.isArray(fila)) return false;

		for (let num of fila) {
			if (typeof num !== "number" || !isFinite(num)) {
				return false;
			}
		}
	}
	return true;
}

function multByK(matriz, k) {
	const matrizC = [];
	const fila = matriz.length;

	for (let f = 0; f < fila; f++) {
		let filaC = [];
		const columna = matriz[f].length;
		for (let c = 0; c < columna; c++) {
			filaC.push(matriz[f][c] * k);
		}
		matrizC.push(filaC);
	}

	return matrizC;
}

function mensajeError() {
	return "No es matriz Cuadrada por lo tanto no se puede multiplicar por un escalar";
}

function ejercicio3(matriz, k) {
	if (esMatrizValida(matriz)) {
		let resultado = multByK(matriz, k);
		return resultado;
	} else {
		return mensajeError();
	}
}

let matriz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let k = 2;
console.log(ejercicio3(matriz, k));
