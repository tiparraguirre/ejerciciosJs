function contarcantidad(arr1, arr2) {
	if (arr1.length == arr2.length) {
		return "misma cantidad de numeros"

	} else {
		return "no misma cantidad de numeros"
	}

}

let array = [1, 2, 3]
let array2 = [1, 2, 3]
let array3 = [1, 2, 3, 4]
console.log(contarcantidad(array, array2));
console.log(contarcantidad(array, array3));