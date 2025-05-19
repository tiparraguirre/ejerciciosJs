let matriz1 = [
	[1, 1],
	[2, 2]];

let matriz2 = [
	[3, 1],
	[3, 2]
]
let resultado = []
for (let i = 0; i < matriz1.length; i++) {
	resultado[i] = [];
	for (let j = 0; j < matriz2[i].length; j++) {
		resultado[i][j] = matriz1[i][j] + matriz2[i][j]


	}
}

let prueba = []
console.log(prueba);
prueba[0] = []
prueba[0][0] = 1
prueba[0][1] = 2
prueba[0][2] = 3
console.log(prueba);
prueba[1] = []
prueba[1][0] = 1
prueba[1][1] = 2
prueba[1][2] = 3
console.log(prueba);

