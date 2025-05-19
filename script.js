let array = [34, 54, 123, 542, 123, 2]
let n = array.length;



for (let i = 0; i < n; i++) {
	for (let j = 0; j < n - 1 - i; j++) {
		if (array[j] > array[j + 1]) {

			[array[j], array[j + 1]] = [array[j + 1], array[j]]
		}


	}

}
console.log(array);






