// let array = [
// 	[1, 2, 3, 4],
// 	[1, 2, 3, 4]
// ]
// let contador = []
// for (let i = 0; i < array.length; i++) {
// 	for (let j = 0; j < array[i].length; j++) {
// 		contador.push(array[i][j])
// 	}
// }
// console.log(contador.length);

function contarElementos(matriz) {
	let contador = []
	const fila = matriz.length
	for (let f = 0; f < fila; f++) {
		for (let c = 0; c < matriz[f].length; c++) {
			contador.push([matriz[f][c]])
		}

	}
	return contador.length
}
let matriz = [
	[1, 2, 3, 4],
	[5, 6, 7, 8, 9],
	[10, 11, 12, 13, 14, 15]
]
console.log(contarElementos(matriz));
