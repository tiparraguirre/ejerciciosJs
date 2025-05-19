let matriz1 = [
	[1, 2, 3],
	[4, 5, 6]]
let matrizc = []
let k = 2

for (let i = 0; i < matriz1.length; i++) {
	let fila = []


	for (let j = 0; j < matriz1[i].length; j++) {


		fila.push(matriz1[i][j] * k)

	}
	matrizc.push(fila)

}
console.log(matrizc);
