function sumDig(num1, num2) {
	if (typeof num1 !== "number" && typeof num2 !== "number") {
		console.log("no es numero");


	} else if (typeof num1 == "number" && typeof num2 == "number") {
		let num1str = String(Math.abs(num1));
		let num2str = String(Math.abs(num2));
		let suma1 = 0;
		let suma2 = 0;

		for (let i = 0; i < num1str.length; i++) {
			let digito1 = num1str[i]
			if (Number(digito1) % 2 == 0) {
				suma1 = suma1 + Number(digito1);
			}

		} for (let j = 0; j < num2str.length; j++) {
			let digito2 = num2str[j]
			if (Number(digito2) % 2 == 0) {
				suma2 = suma2 + Number(digito2);
			}


		}

		console.log(suma1 + suma2);

	}
}



sumDig(22, 14)