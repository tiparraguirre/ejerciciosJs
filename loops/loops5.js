function sumDig(numero) {
	if (typeof numero !== "number") {
		console.log("no es numero");


	} else if (typeof numero == "number") {
		let numStr = String(Math.abs(numero))
		let suma = 0

		for (let i = 0; i < numStr.length; i++) {
			let digito = numStr[i]
			suma = suma + Number(digito)

		}
		console.log(suma);

	}
}



sumDig(-22)