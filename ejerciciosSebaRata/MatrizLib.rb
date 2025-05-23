require_relative './ejercicioMatrisRuby'
require_relative './ejercicioCentroRuby.rb'

class MatrizLib
  def initialize(matriz)
    @matriz = matriz
  end

  def centroExactoMatriz
    columnas = nil
    filas = @matriz.length
    
    @matriz.each do |fila|
      columnas = fila.length
    end
    
    return "La Matriz es Par por lo tanto no tiene centro exacto" unless columnas.odd? || filas.odd?
    
    columnaMedio = (columnas / 2).ceil
    filaMedio = (filas / 2).ceil
    @matriz[filaMedio][columnaMedio]
  end

  def puntoMedio(elemento1, elemento2)
    indiceFila1 = nil
    indiceColumna1 = nil
    indiceFila2 = nil
    indiceColumna2 = nil
    
    @matriz.each_with_index do |fila, f|
      fila.each_with_index do |elemento, c|
        if elemento == elemento1
          indiceFila1 = f
          indiceColumna1 = c
        elsif elemento == elemento2
          indiceFila2 = f
          indiceColumna2 = c
        end
      end
    end

    cord1 = [indiceFila1, indiceColumna1]
    cord2 = [indiceFila2, indiceColumna2]
    calcular_centro(cord1,cord2)
    
end

  def promedio
    resultado = []
    @matriz.each_with_index do |fila, f|
      fila.each_with_index do |columna, c|
        adyacentes = sacarElementosAdyacentes(@matriz, f, c)
        elementopromedio = sacarPromedio(adyacentes)
        resultado.push(elementopromedio)
      end
    end
    resultado
  end
end

matriz_generica = matriz = [
  [1, 2, 3],
  [4, 5, 6], 
  [7, 8, 9]
]

matriz = MatrizLib.new(matriz_generica)
puts matriz.puntoMedio(2,9)
