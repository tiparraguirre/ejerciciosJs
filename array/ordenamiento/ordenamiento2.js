
function intercambiar(array, i, j) {
	let newarray = [];
	newarray = [...array];
	[newarray[i], newarray[j]] = [newarray[j], newarray[i]];
	return newarray
}



let array = [1, 2, 3, 4, 5]
console.log(intercambiar(array, 1, 3));
