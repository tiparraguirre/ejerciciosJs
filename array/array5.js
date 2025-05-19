let array = [1, 2, 3, 4, 5, 6]
let arrayCopia = []

for (let i = 0; i < array.length; i++) {
	let valoresCopia = array[i] + 1
	arrayCopia.push(valoresCopia)
}

console.log(array);
console.log(arrayCopia);

