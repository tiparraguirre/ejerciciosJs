let matriz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],

]
let suma = 0
for (let i = 0; i < matriz.length; i++) {
	for (let j = 0; j < matriz[i].length; j++) {
		if (j == i) {
			suma = suma + matriz[i][j]

		}

	}

}
console.log(suma);
let matriz1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],

]
let suma2 = 0
for (let ii = 0; ii < matriz1.length; ii++) {


	suma2 += matriz1[ii][ii]





}
console.log(suma2);

