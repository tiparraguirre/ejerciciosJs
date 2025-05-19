

function split(array) {
	const mitad = Math.floor(arr.length / 2);
	let parte1 = array.slice(0, mitad + (arr.length % 2))
	let parte2 = array.slice(mitad + (arr.length % 2))
	let newarray = []
	newarray.push(parte1)
	newarray.push(parte2)
	return newarray
}



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(split(arr)); // [[1,2,3,4], [5,6,7,8]]


