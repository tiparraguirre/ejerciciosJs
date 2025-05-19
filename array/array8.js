let array = []
function generarNarrays(n) {

	for (let i = 0; i < n; i++) {
		let num = Math.floor(Math.random() * 100);
		array.push(num)
	}
}
generarNarrays(10)
console.log(array)