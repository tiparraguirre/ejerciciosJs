let matriz = [
	[-1, -2, -8, -3],
	[-1, -2, -3, -4, 8]
]
let num = -Infinity
let mayor
for (let i = 0; i < matriz.length; i++) {

	for (let j = 0; j < matriz[i].length; j++) {
		if (matriz[i][j] > num) {
			num = matriz[i][j]
		}


	}
}

console.log(num);
