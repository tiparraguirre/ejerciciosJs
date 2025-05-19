let matriz = [
	[1, 3, 5, 9],
	[3, 5, 6, 7]
]
let num = 8
let contador = 0
for (let i = 0; i < matriz.length; i++) {

	for (let j = 0; j < matriz[i].length; j++) {
		if (matriz[i][j] === num) {
			contador = contador + 1
		}

	}


}
if (contador > 0) {
	console.log(`el numero esta ${contador} veces`);


} else {
	console.log("el numero no esta");

}
