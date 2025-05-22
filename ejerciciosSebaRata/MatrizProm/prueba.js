const matriz = [
	[2, 4, 6, 8, 10],
	[4, 8, 12, 16, 20],
	[6, 12, 11, 5, 30]
];
function esMatrizValida(matriz) {
	return Array.isArray(matriz) &&
		matriz.length > 0 &&
		matriz.every(
			fila => Array.isArray(fila) &&
				fila.length > 0 &&
				fila.every(num => typeof num === "number" && num >= 0)
		);
}
console.log(esMatrizValida(matriz));


function adyacentes(matriz, f, c) {
	const posiciones = [
		[f - 1, c - 1], [f - 1, c], [f - 1, c + 1],
		[f, c - 1], [f, c + 1],
		[f + 1, c - 1], [f + 1, c], [f + 1, c + 1]
	];
	return posiciones
		.filter(([i, j]) => matriz[i] && matriz[i][j] !== undefined)
		.map(([i, j]) => matriz[i][j]);
}
console.log(adyacentes(matriz, 1, 1));


function promediarAdyacentes(matriz) {
	if (!esMatrizValida(matriz)) return "matriz no valida";
	return matriz.map((fila, f) =>
		fila.map((_, c) => {
			const ady = adyacentes(matriz, f, c);
			const suma = ady.reduce((a, b) => a + b, 0);
			return suma / ady.length;
		})
	);
}



// Ejemplo de uso:


console.log(promediarAdyacentes(matriz));