function sonCoordenadasValidas(cord1, cord2) {
	const coordsJuntas = cord1.concat(cord2);
	const size = coordsJuntas.length;

	for (let i = 0; i < size; i++) {
		const punto = coordsJuntas[i];
		if (typeof punto !== "number" || punto > 100 || punto < 0) {
			return false;
		}
	}

	if (size != 4) {
		return false;
	} else {
		return true;
	}
}
function calcularCentro(cord1, cord2) {
	const xcentro = (cord1[0] + cord2[0]) / 2
	const ycentro = (cord1[1] + cord2[1]) / 2
	let centro = [xcentro, ycentro]
	return redondearCentro(centro)

}
function redondearCentro(centro) {
	const centroRedondeado = []
	const xRedondeado = Math.ceil(centro[0])
	const yRedondeado = Math.ceil(centro[1])
	centroRedondeado.push(xRedondeado)
	centroRedondeado.push(yRedondeado)
	return centroRedondeado
}
function respuesta(centro, cord1, cord2) {
	return `el centro del rectangulo de las cordenadas [${cord1}],[${cord2}] es : [${centro[0]}:${centro[1]}]"`
}

function tirarError() {
	throw new Error("Las coordenadas no son validas");

}

function EjercicioSeba(cord1, cord2) {
	if (sonCoordenadasValidas(cord1, cord2)) {
		const centro = calcularCentro(cord1, cord2)
		return respuesta(centro, cord1, cord2)
	} else {
		tirarError()
	}
}

try {
	let coordenada1 = [2, 8]
	let coordenada2 = [100, 7]
	console.log(EjercicioSeba(coordenada1, coordenada2));


} catch (error) {
	console.log(error.message);
}