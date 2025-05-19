function intercambiar(array, i, j) {
	[array[i], array[j]] = [array[j], array[i]]
	return array
}

let array = [1, 2, 3, 4, 5]
console.log(intercambiar(array, 0, 4));
