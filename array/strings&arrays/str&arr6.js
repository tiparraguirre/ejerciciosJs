let array1 = [1, 2, 3]
let array2 = [2, 3, 4]
function Sumar(arr1, arr2) {

	let arrsum = []
	if (arr1.length == arr2.length) {
		for (let i = 0; i < arr1.length; i++) {
			arrsum.push(arr1[i] + arr2[i])
		}
		return arrsum
	}
	else {
		return "no misma cantidad de numeros"
	}
}
console.log(Sumar(array1, array2));

