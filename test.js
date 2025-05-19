function Usuario(name, contra) {
	this.name = name;
	this.contra = contra;
	this.mostrarContra = function () {
		console.log(this.contra);

	}
}
let user1 = new Usuario("tomas", 23);
let user2 = new Usuario("juan", 24);
let user3 = new Usuario("jose", 1231312);

console.log(user1);
console.log(user2);
console.log(user3);


user1.mostrarContra();
user2.mostrarContra();