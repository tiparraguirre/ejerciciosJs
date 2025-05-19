function determinarColor(color) {
	let array = ["azul", "amarillo", "rojo", "verde", "cafe", "rosa"]
	let contador = 0
	for (let i = 0; i < array.length; i++) {
		if (color == array[i]) {
			contador++
		}
	}
	if (contador == 1) {
		return true
	} else {
		return false
	}

}
console.log(determinarColor("rojo"));