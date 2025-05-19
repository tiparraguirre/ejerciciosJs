function adivinar() {
	let intentar = parseInt(prompt("Ingresa un número entre 1 y 10:"));
	let aleatorio = Math.floor(Math.random() * 10);
	while (intentar != aleatorio) {
		intentar = parseInt(prompt("Ingresa un número entre 1 y 10:"));
	}
	console.log(" ganaste");

}
adivinar();