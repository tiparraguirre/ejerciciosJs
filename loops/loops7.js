function sumNat(numero) {
	if (typeof numero != "number") {
		console.log("no es numero");


	} if (typeof numero == "number") {
		let numstr = String(Math.abs(numero))
		let numHelper = 0;
		let suma = 0;
		for (let i = 0; i <= numero; i++) {
			numHelper = i;
			suma = suma + numHelper;
		}
		console.log(suma);

	}

}
sumNat(7)