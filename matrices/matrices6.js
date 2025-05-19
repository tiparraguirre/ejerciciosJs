// let matriz = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],

// ]
// let suma = 0
// for (let i = 0; i < matriz.length; i++) {
// 	for (let j = 0; j < matriz[i].length; j++) {
// 		if (j == i) {
// 			suma = suma + matriz[i][j]

// 		}

// 	}

// }
// console.log(suma);
// let matriz1 = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],

// ]
// let suma2 = 0
// for (let ii = 0; ii < matriz1.length; ii++) {


// 	suma2 += matriz1[ii][ii]





// }
// console.log(suma2);

function verificarMatrizCuadrada(matriz) {
	const fila = matriz.length
	for (let f = 0; f < fila; f++) {
		if (matriz[f].length !== fila) {
			return false
		}
	}
	return true
}

function sumarDiagonal(matriz) {
	if (verificarMatrizCuadrada(matriz) == false) {
		return "no es matriz cuadrada"
	}
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
console.log(sumarDiagonal(matriz));

