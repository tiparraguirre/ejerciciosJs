// function calcularCantidadElementos(matriz) {
//     const fila = matriz.length
//     contador = 0
//     for (let f = 0; f < fila; f++) {

//         for (let c = 0; c < matriz[f].length; c++) {
//             contador = contador + 1

//         }
//     }
//     return contador
// }


// function unirMatrizProm(prom, matriz) {
//     const matrizProm = []
//     for (let f = 0; f < matriz.length; f++) {
//         matrizprom[i] = []
//         for (let c = 0; c < matriz[i].length; c++) {
//             matrizProm.push(prom)
//         }

//     }

// return matrizProm
// }
// function loopElemento(matriz) {
//     const fila = matriz
//     for (let f = 0; f < fila.length; f++) {
//         for (let c = 0; c < matriz[f].length; c++) {
//             //  let elemento = sacarElementoMatriz(matriz, f, c)
//             let adyacentes = sacarElementosadyacentes(matriz, f, c)
//             let sumaAd = sumarAdyacentes(adyacentes)
//             let contador = contarAdyacentes(adyacentes)
//             let prom = calcularPromedioady(sumaAd, contador)
//             let matrizPromediada = unirMatrizProm(prom, f, matriz)
//             return matrizPromediada
//         }

//     }

// }
// // //correcta
// // function calcularCantidadElementos(matriz) {
// // 	const fila = matriz.length
// // 	contador = 0
// // 	for (let f = 0; f < fila; f++) {

// // 		for (let c = 0; c < matriz[f].length; c++) {
// // 			contador = contador + 1

// // 		}
// // 	}
// // 	return contador
// // }


// // const matriz = [
// // 	[1, 2, 3],
// // 	[4, 5, 6],
// // 	[7, 8, 9],
// // 	[10, 11, 12]
// // ]
// // function sacarElementosadyacentes(matriz, f, c) {

// // 	const adyacentes = []
// // 	const fila = matriz.length
// // 	const der = c + 1
// // 	const izq = c - 1
// // 	const abajo = f + 1
// // 	const arriba = f - 1


// // 	if (c !== 0 || f !== 0 || c < matriz[f].length || f < matriz.length) {
// // 		adyacentes.push(matriz[f][der])
// // 		adyacentes.push(matriz[f][izq])
// // 		adyacentes.push(matriz[abajo][c])
// // 		adyacentes.push(matriz[abajo][izq])
// // 		adyacentes.push(matriz[abajo][der])
// // 		adyacentes.push(matriz[arriba][c])
// // 		adyacentes.push(matriz[arriba][der])
// // 		adyacentes.push(matriz[arriba][izq])

// // 	}

// // 	if (c == 0 && f !== 0 && f !== matriz.length && c == matriz[f].length) {
// // 		adyacentes.push(matriz[f][der])
// // 		adyacentes.push(matriz[abajo][c])
// // 		adyacentes.push(matriz[abajo][der])
// // 		adyacentes.push(matriz[arriba][c])
// // 		adyacentes.push(matriz[arriba][der])
// // 	}
// // 	if (f == 0 && c !== 0 && f !== matriz.length && c == matriz[f].length) {
// // 		adyacentes.push(matriz[f][izq])
// // 		adyacentes.push(matriz[abajo][der])
// // 		adyacentes.push(matriz[abajo][c])
// // 		adyacentes.push(matriz[f][der])
// // 		adyacentes.push(matriz[abajo][izq])
// // 	}
// // 	if (c == 0 && f == 0) {
// // 		adyacentes.push(matriz[f][der])
// // 		adyacentes.push(matriz[abajo][der])
// // 		adyacentes.push(matriz[abajo][c])
// // 	}
// // 	if (f == matriz.length && c == 0) {
// // 		adyacentes.push(matriz[f][der])
// // 		adyacentes.push(matriz[arriba][c])
// // 		adyacentes.push(matriz[arriba][der])
// // 	}
// // 	if (f == 0 && c == matriz[f].length) {
// // 		adyacentes.push(matriz[f][izq])
// // 		adyacentes.push(matriz[abajo][c])
// // 		adyacentes.push(matriz[abajo][izq])
// // 	}
// // 	if (f == matriz.length && c == matriz[f].length) {
// // 		adyacentes.push(matriz[arriba][c])
// // 		adyacentes.push(matriz[f][izq])
// // 		adyacentes.push(matriz[arriba][izq])


// // 	}
// // 	// adyacentes.push(matriz[abajo][izq])
// // 	// adyacentes.push(matriz[f][der])
// // 	// adyacentes.push(matriz[f][izq])
// // 	// adyacentes.push(matriz[abajo][c])
// // 	// adyacentes.push(matriz[arriba][c])
// // 	// adyacentes.push(matriz[abajo][der])

// // 	// adyacentes.push(matriz[arriba][der])
// // 	// adyacentes.push(matriz[arriba][izq])



// // 	return adyacentes


// // }
// // correcto

// function sacarElementosadyacentes2(matriz, f, c) {

// 	const adyacentes = []
// 	const izq = c - 1
// 	const der = c + 1
// 	const arriba = f - 1
// 	const abajo = f + 1

// 	adyacentes.push(elementoExiste(matriz, f, der))
// 	adyacentes.push(elementoExiste(matriz, f, izq))
// 	adyacentes.push(elementoExiste(matriz, abajo, der))
// 	adyacentes.push(elementoExiste(matriz, abajo, izq))
// 	adyacentes.push(elementoExiste(matriz, arriba, der))
// 	adyacentes.push(elementoExiste(matriz, arriba, izq))
// 	adyacentes.push(elementoExiste(matriz, arriba, c))
// 	adyacentes.push(elementoExiste(matriz, abajo, c))


// 	const adyacenteAplanados = aplanarAdyacentes(adyacentes)
// 	return adyacenteAplanados
// }
// // correcto
// function aplanarAdyacentes(adyacentes) {
// 	return adyacentes.filter(elemento => elemento !== undefined)
// }
const matriz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]

]
// console.log(sacarElementosadyacentes2(matriz, 0, 2))
// // correcto
// function elementoExiste(matriz, fila, columna) {

// 	if (fila < 0 || fila >= matriz.length) {
// 		return undefined;
// 	}

// 	if (columna < 0 || columna >= matriz[fila].length) {
// 		return undefined;
// 	}

// 	return matriz[fila][columna];
// }
//correcto
const matriz2 = [1, 2, 3]
function sumarAdyacentes(adyacentes) {
	let suma = 0
	for (let i = 0; i < adyacentes.length; i++) {
		suma += adyacentes[i]


	}
	return suma
}
//correcto
function contarAdyacentes(adyacentes) {
	let cantidad = 0
	for (let i = 0; i < adyacentes.length; i++) {

		cantidad += 1

	}
	return cantidad
}
// correcto
function calcularPromedioady(suma, n) {
	const prom = suma / n
	return prom
}
console.log(calcularPromedioady(10, 5));
function esMatrizValida(matriz) {
	if (!Array.isArray(matriz)) {
		return false
	}

	if (matriz.length === 0) {
		return false
	}

	const filas = matriz.length

	for (let f = 0; f < filas; f++) {
		if (!Array.isArray(matriz[f])) {
			return false
		}

		const columnas = matriz[f].length

		for (let c = 0; c < columnas; c++) {
			const elemento = matriz[f][c]
			if (typeof elemento !== "number" || elemento < 0) {
				return false
			}
		}
	}

	return true
}

const matriz4 = [
	[1, -1, 3],
	[1, 2, 3],
	[1, 2, -1]
]
console.log(esMatrizValida(matriz4));
