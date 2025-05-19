function numeroToArr(num) {

	let array = num.split(",").map(Number)
	return array
}
console.log(numeroToArr("1,2,3,4,5"));
