function interseccionArr(arr1, arr2) {
	let interseccion = []
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] == arr2[j] && !interseccion.includes(arr1[i])) {
				interseccion.push(arr1[i])

			}
		}

	}
	return interseccion

}


let array = [1, 2, 3, 3, 4, 5, 6]
let array2 = [1, 2, 4, 2, 3, 3, 4, 5]
console.log(interseccionArr(array, array2))

