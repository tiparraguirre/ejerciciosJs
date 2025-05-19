
function pares(arr1) {
	let arrpares = []
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] % 2 == 0) {
			arrpares.push(arr1[i])
		}
	}
	return arrpares
}


let array = [1, 2, 3, 4, 5, 6, 4, 3, 2, 1]
console.log(pares(array));
