function bisiesto(año) {
	if (año < 0) {
		console.log("año invalido");
		return;
	}
	if (año > 0 && año % 4 == 0) {
		console.log("biiesto");


	} else {
		console.log("no bisiesto");

	}

}

bisiesto(1)