function buble(array) {
	let newarray = [...array]
	for (let i = 0; i < newarray.length; i++) {
		for (let j = 0; j < newarray.length - 1; j++) {
			if (newarray[i] > newarray[j]) {
				[newarray[i], newarray[j]] = [newarray[j], newarray[i]]

			}

		}

	}

	return newarray
}
let array = [1, 2, 3, 5, 1, 6, -2, 8, 3]
console.log(buble(array));
