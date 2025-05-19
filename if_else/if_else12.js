function mostrarTablaVerdad() {
	for (let a = 0; a <= 1; a++) {
		for (let b = 0; b <= 1; b++) {
			let notA = !a;
			let notB = !b
			let valorand = notA && notB
			let valorOr = notA || notB
			console.log(a, b, valorOr, valorand);

		}


	}
}

mostrarTablaVerdad()	