// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// let transpuesta = []
// for (let i = 0; i < matriz.length; i++) {
//     transpuesta[i] = []
//     for (let j = 0; j < matriz[i].length; j++) {
//         transpuesta[i][j] = matriz[j][i]
//         console.log(transpuesta);

//     }

// }
// console.log(transpuesta);

function verificarMatrizCuadrada(matriz) {
    const fila = matriz.length
    for (let f = 0; f < fila; f++) {
        if (matriz[f].length !== fila) {
            return false
        }
    }
    return true
}

function transpuesta(matriz) {
    if (verificarMatrizCuadrada(matriz) == false) {
        return "no es matriz cuadrada"
    }
    const transpuesta = []
    const fila = matriz.length
    const columna = matriz.length
    for (let f = 0; f < fila; f++) {
        transpuesta[f] = []
        for (let c = 0; c < columna; c++) {
            transpuesta[f][c] = matriz[c][f]
        }
    }
    return transpuesta
}

const matriz = [
    [2, 3, 4],
    [6, 89, 23],
    [1, -6, 7]
]
console.log(transpuesta(matriz));
