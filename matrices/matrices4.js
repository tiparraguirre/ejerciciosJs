// let matriz = [
// 	[-1, -2, -8, -3],
// 	[-1, -2, -3, -4, 8]
// ]

// let mayor
// for (let i = 0; i < matriz.length; i++) {

// 	for (let j = 0; j < matriz[i].length; j++) {
// 		if (matriz[i][j] > num) {
// 			num = matriz[i][j]
// 		}


// 	}
// }

// console.log(num);

function numMasgrande(matriz) {
	const fila = matriz.length
	let mayor = -Infinity
	for (let f = 0; f < fila; f++) {
		for (let c = 0; c < matriz[f].length; c++) {
			if (matriz[f][c] > mayor) {
				mayor = matriz[f][c]
			}

		}
	}
	if (mayor != -Infinity) { return mayor }
	if (mayor = Infinity) { return "no hay nums o no es matriz valida" }
}

let matriz = [
	[-1],
	[-2]
]
console.log(numMasgrande(matriz));
