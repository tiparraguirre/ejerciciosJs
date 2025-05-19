
let filas = 5;


for (let i = 1; i <= filas; i++) {
	let espacios = " ".repeat(filas - i);
	let asteriscos = "*".repeat(2 * i - 1);
	document.write(espacios + asteriscos);
	document.write("<br>");
}

for (let i = filas - 1; i >= 1; i--) {
	let espacios = " ".repeat(filas - i);
	let asteriscos = "*".repeat(2 * i - 1);
	document.write(espacios + asteriscos);
	document.write("<br>");
}
