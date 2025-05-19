function buble(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[i] > array[j]) {
				[array[i], array[j]] = [array[j], array[i]]

			}

		}

	}

	return array
}
let array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(buble(array));
