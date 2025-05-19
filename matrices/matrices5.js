// let matriz = [
// 	[1, 3, 5, 9],
// 	[3, 5, 6, 7]
// ]
// let num = 8
// let contador = 0
// for (let i = 0; i < matriz.length; i++) {

// 	for (let j = 0; j < matriz[i].length; j++) {
// 		if (matriz[i][j] === num) {
// 			contador = contador + 1
// 		}

// 	}


// }
// if (contador > 0) {
// 	console.log(`el numero esta ${contador} veces`);


// } else {
// 	console.log("el numero no esta");
//}

function determinarNumMatriz(matriz, num) {
	let contador = 0
	const fila = matriz.length
	for (let f = 0; f < fila; f++) {
		for (let c = 0; c < matriz[f].length; c++) {
			if (matriz[f][c] === num) {
				contador += 1
			}
		}
	}

	if (contador > 0) {
		return `el numero esta ${contador} veces`
	} else {
		return "el numero no esta"

	}

}
let matriz = [
	[1, 2, 3],
	[1, 2, 4]
]
let num = 4
console.log(determinarNumMatriz(matriz, 2));
