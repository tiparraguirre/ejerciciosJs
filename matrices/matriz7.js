let matriz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]
let transpuesta = []
for (let i = 0; i < matriz.length; i++) {
	transpuesta[i] = []
	for (let j = 0; j < matriz[i].length; j++) {
		transpuesta[i][j] = matriz[j][i]
		console.log(transpuesta);

	}

}
console.log(transpuesta);
