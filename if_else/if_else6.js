function determinar(strings) {

	if (strings.charAt(0).match(/\d/)) {
		console.log("numero");

	} else if (strings.charAt(0).match(/[a-zA-Z]/)) {
		console.log("letra");


	}

}
determinar("12her2332e")