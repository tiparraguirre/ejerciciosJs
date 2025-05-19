function ejericio7(matriz) {
    if (esMatrizCuadrada(matriz)) {
        let transpuesta = calcularTranspuesta(matriz);
        return transpuesta;

    } else {
        return "no es matriz cuadrada";
    }
}
function esMatrizCuadrada(matriz) {
    const fila = matriz.length;

    for (let f = 0; f < fila; f++) {
        if (matriz[f].length !== fila) {
            return false;
        }
    }

    return true;
}

function calcularTranspuesta(matriz) {
    const transpuesta = [];
    const fila = matriz.length;
    const columna = matriz.length;

    for (let f = 0; f < fila; f++) {
        transpuesta[f] = [];
        for (let c = 0; c < columna; c++) {
            transpuesta[f][c] = matriz[c][f];
        }
    }

    return transpuesta;
}

const matriz = [
    [2, 3, 4],
    [6, 89, 23],
    [1, -6, 7],
];
console.log(ejericio7(matriz));
