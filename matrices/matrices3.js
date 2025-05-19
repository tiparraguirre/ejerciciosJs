// let matriz1 = [
// 	[1, 2, 3],
// 	[4, 5, 6]]
// let matrizc = []
// let k = 2

// for (let i = 0; i < matriz1.length; i++) {
// 	let fila = []


// 	for (let j = 0; j < matriz1[i].length; j++) {


// 		fila.push(matriz1[i][j] * k)

// 	}
// 	matrizc.push(fila)

// }
// console.log(matrizc);


function verificarMatrizCuadrada(matriz) {
	const fila = matriz.length
	for (let f = 0; f < fila; f++) {
		if (matriz[f].length !== fila) {
			return false
		}
	}
	return true
}

function multByK(matriz, k) {
	if (verificarMatrizCuadrada(matriz, k) == false) {
		return "no es cuadrada y por lo tanto no multiplicable"
	}


	const matrizC = []
	const fila = matriz.length
	const columna = matriz.length
	for (let f = 0; f < fila; f++) {
		let filaC = []
		for (let c = 0; c < columna; c++) {
			filaC.push(matriz[f][c] * k)
		}
		matrizC.push(filaC)
	}
	return matrizC
}

let matriz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]
let k = 2
console.log(multByK(matriz, k));
