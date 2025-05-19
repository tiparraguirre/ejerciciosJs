// let matriz1 = [
// 	[1, 1],
// 	[2, 2]];

// let matriz2 = [
// 	[3, 1],
// 	[3, 2]
// ]
// let resultado = []
// for (let i = 0; i < matriz1.length; i++) {
// 	resultado[i] = [];
// 	for (let j = 0; j < matriz2[i].length; j++) {
// 		resultado[i][j] = matriz1[i][j] + matriz2[i][j]


// 	}
// }

// let prueba = []
// console.log(prueba);
// prueba[0] = []
// prueba[0][0] = 1
// prueba[0][1] = 2
// prueba[0][2] = 3
// console.log(prueba);
// prueba[1] = []
// prueba[1][0] = 1
// prueba[1][1] = 2
// prueba[1][2] = 3
// console.log(prueba);

// console.log(resultado);

// Funcion
// let matriz1 = [
// 	[1, 1],
// 	[2, 2]];

// let matriz2 = [
// 	[3, 1],
// 	[3, 2],
// 	[1, 2]
// ]
// let resultado = []
// for (let i = 0; i < matriz1.length; i++) {
// 	resultado[i] = [];
// 	for (let j = 0; j < matriz2[i].length; j++) {
// 		resultado[i][j] = matriz1[i][j] + matriz2[i][j]
// 	}
// }

function verificarRaizCuadradaDoble(matriz1, matriz2) {
	const fila1 = matriz1.length
	const fila2 = matriz2.length
	if (fila1 !== fila2) {
		return false
	} else {

		for (let f = 0; f < matriz1.length; f++) {
			if (matriz1[f].length !== matriz2[f].length) {
				return false
			}
		} return true
	}
}
function sumMatriz(matriz1, matriz2) {
	if (verificarRaizCuadradaDoble(matriz1, matriz2) == false) {
		return "no son raices cuadradas"
	} else {
		const fila = matriz1.length
		const columna = matriz1.length
		let resultado = []
		for (let f = 0; f < fila; f++) {
			resultado[f] = [];
			for (let c = 0; c < columna; c++) {
				resultado[f][c] = matriz1[f][c] + matriz2[f][c]
			}
		}
		return resultado
	}
}

let matrizA = [
	[1, 1],
	[2, 2]

]
let matrizB = [
	[1, 1],
	[2, 2,]
]

console.log(sumMatriz(matrizA, matrizB));
