let array = [
	[1, 2, 3, 4],
	[1, 2, 3, 4]
]
let contador = []
for (let i = 0; i < array.length; i++) {
	for (let j = 0; j < array[i].length; j++) {
		contador.push(array[i][j])
	}
}
console.log(contador.length);
