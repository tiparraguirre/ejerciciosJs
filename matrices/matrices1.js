function esMatrizDeMismoOrden(matriz1, matriz2) {
	const fila1 = matriz1.length;
	const fila2 = matriz2.length;
	if (fila1 !== fila2) {
		return false;
	} else {
		for (let f = 0; f < matriz1.length; f++) {
			if (matriz1[f].length !== matriz2[f].length) {
				return false;
			}
		}
		return true;
	}
}

function sumMatrices(matriz1, matriz2) {
	const fila = matriz1.length;
	const columna = matriz1.length;
	let resultado = [];
	for (let f = 0; f < fila; f++) {
		resultado[f] = [];
		for (let c = 0; c < columna; c++) {
			resultado[f][c] = matriz1[f][c] + matriz2[f][c];
		}
	}
	return resultado;
}

function mensajeError() {
	return "No se puede sumar porque no son raices de mismo orden";
}

function ejercicio1(m1, m2) {
	if (esMatrizDeMismoOrden(m1, m2)) {
		let resultado = sumMatrices(m1, m2);
		return resultado;
	} else {
		return mensajeError();
	}
}

let matrizA = [
	[1, 1],
	[2, 2],
];
let matrizB = [
	[1, 1],
	[2, 2],
];
console.log(ejercicio1(matrizA, matrizB));
