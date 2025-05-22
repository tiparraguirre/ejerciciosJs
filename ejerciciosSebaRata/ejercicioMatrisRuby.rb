MATRIZ = [
  [2, 4, 6, 8, 10],
  [4, 8, 12, 16, 20],
  [6, 12, 11, 5, 30]
]

def ejericioMatriz(matriz)
  if esMatrizValida(matriz)
    resultado = []
    matriz.each_with_index do |fila, f|
      fila.each_with_index do |columna, c|
        adyacentes = sacarElementosAdyacentes(matriz, f, c)
        elemento = columna
        elementopromedio = sacarPromedio(adyacentes)
        resultado.push(elementopromedio)
      end
    end
    resultado
  else
    "matriz no valida"
  end
end

def esMatrizValida(matriz)
  if !matriz.is_a?(Array)
    return false
  end
  matriz.each do |fila|
    if !fila.is_a?(Array)
      return false
    end
    fila.each do |elemento|
      if !elemento.is_a?(Numeric) || elemento < 0
        return false
      end
    end
  end
  true
end

def sacarElementosAdyacentes(matriz, f, c)
  POSICIONES = [
    [f, c - 1], [f, c + 1],
    [f - 1, c], [f + 1, c],
    [f - 1, c - 1], [f - 1, c + 1],
    [f + 1, c + 1], [f + 1, c - 1]
  ]

  elementosAdyacentes = []

  POSICIONES.each do |pos|
    if pos[0] >= 0 && pos[0] < matriz.length &&
       pos[1] >= 0 && pos[1] < matriz[pos[0]].length
      elementosAdyacentes.push(matriz[pos[0]][pos[1]])
    end
  end
  elementosAdyacentes
end

def sacarPromedio(adyacentes)
  contador = adyacentes.length
  suma = 0

  adyacentes.each do |elemento|
    suma += elemento
  end

  elementoPromediado = suma.to_f / contador
  elementoPromediado
end

ejericioMatriz(MATRIZ)

# sacarElementosAdyacentes(matriz,0,0)