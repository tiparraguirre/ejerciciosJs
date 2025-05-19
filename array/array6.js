let array = [1, 2, 3, 4, 5, 6]
let sumaNotas = 0
for (let i = 0; i < array.length; i++) {
	let valores = array[i]
	sumaNotas = sumaNotas + valores

}
let prom = sumaNotas / array.length
console.log(prom);
