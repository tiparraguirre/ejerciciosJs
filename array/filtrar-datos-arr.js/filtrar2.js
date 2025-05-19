function vocales(array) {
	let vocales = []

	for (let i = 0; i < array.length; i++) {
		let palabra = array[i].toUpperCase()
		switch (palabra[0]) {
			case "A":
			case "E":
			case "I":
			case "O":
			case "U":
				vocales.push(array[i])
				break;

		}

	}
	return vocales
}


let array = ["Zapato", "Ojo", "ola", "Hola", "Argentina", "reloj"]
console.log(vocales(array));
