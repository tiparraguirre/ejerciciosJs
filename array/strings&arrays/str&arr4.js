function interseccionArr(arr1, arr2) {
	let repetidos = []
	let norepetidos = []
	for (i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i])) {
			repetidos.push(arr1[i])
			repetidos.push(arr1[i])
		} else if (!norepetidos.includes(arr1[i])) {
			norepetidos.push(arr1[i])
		}
	}
	for (let i = 0; i < arr2.length; i++) {
		if (!arr1.includes(arr2[i]) && !norepetidos.includes(arr2[i])) {
			norepetidos.push(arr2[i])
		}
	}

	let interseccion = repetidos.concat(norepetidos)
	interseccion = interseccion.sort((a, b) => a - b)
	return interseccion
}

let array = [1, 2, 3];
let array2 = [1, 2, 4];

console.log(interseccionArr(array, array2));
