function ejerciocio2(matriz) {
    if (esMatrizValida(matriz)) {
        const resultado = []
        for (let f = 0; f < matriz.length; f++) {
            for (let c = 0; c < matriz[f].length; c++) {
                const adyacentes = sacarElementosadyacentes2(matriz, f, c)
                const suma = sumarAdyacentes(adyacentes)
                const cantidad = contarAdyacentes(adyacentes)
                const promedio = calcularPromedioady(suma, cantidad)
                agregarResultadoMatrizProm(promedio, f, resultado)
            }
        }
        return resultado
    } else {
        return mostrarError()
    }
}

//correcto
function esMatrizValida(matriz) {
    if (!Array.isArray(matriz)) {
        return false
    }

    if (matriz.length === 0) {
        return false
    }

    const filas = matriz.length

    for (let f = 0; f < filas; f++) {
        if (!Array.isArray(matriz[f])) {
            return false
        }

        const columnas = matriz[f].length

        for (let c = 0; c < columnas; c++) {
            const elemento = matriz[f][c]
            if (typeof elemento !== "number" || elemento < 0) {
                return false
            }
        }
    }
    return true
}

//correcto
function sacarElementoMatriz(matriz, f, c) {
    return matriz[f][c]
}

// correcto
function sacarElementosadyacentes2(matriz, f, c) {
    const adyacentes = []
    const izq = c - 1
    const der = c + 1
    const arriba = f - 1
    const abajo = f + 1

    adyacentes.push(elementoExiste(matriz, f, der))
    adyacentes.push(elementoExiste(matriz, f, izq))
    adyacentes.push(elementoExiste(matriz, abajo, der))
    adyacentes.push(elementoExiste(matriz, abajo, izq))
    adyacentes.push(elementoExiste(matriz, arriba, der))
    adyacentes.push(elementoExiste(matriz, arriba, izq))
    adyacentes.push(elementoExiste(matriz, arriba, c))
    adyacentes.push(elementoExiste(matriz, abajo, c))

    const adyacenteAplanados = aplanarAdyacentes(adyacentes)
    return adyacenteAplanados
}

// correcto
function aplanarAdyacentes(adyacentes) {
    return adyacentes.filter(elemento => elemento !== undefined)
}

// correcto
function elementoExiste(matriz, fila, columna) {
    if (fila < 0 || fila >= matriz.length) {
        return undefined
    }

    if (columna < 0 || columna >= matriz[fila].length) {
        return undefined
    }

    return matriz[fila][columna]
}

//correcto
const matriz2 = [1, 2, 3]

function sumarAdyacentes(adyacentes) {
    let suma = 0
    for (let i = 0; i < adyacentes.length; i++) {
        suma += adyacentes[i]
    }
    return suma
}

//correcto
function contarAdyacentes(adyacentes) {
    let cantidad = 0
    for (let i = 0; i < adyacentes.length; i++) {
        cantidad += 1
    }
    return cantidad
}

// correcto
function calcularPromedioady(suma, n) {
    const prom = suma / n
    return prom
}

//correcto
function mostrarError() {
    return "matriz no valida"
}

function agregarResultadoMatrizProm(prom, f, resultado) {
    if (!resultado[f]) {
        resultado[f] = []
    }
    resultado[f].push(prom)
    return resultado
}

const matriz = [
    [2, 4, 6, 8, 10],
    [4, 8, 12, 16, 20],
    [6, 12, 11, 5, 30]
]

console.log(ejerciocio2(matriz))
