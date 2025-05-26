module MatrizUtils
  # Clase para obtener las dimensiones de una matriz
  class SacarDimensionesMatriz
    # @param matriz [Array<Array<Numeric>>] matriz de números
    def initialize(matriz)
      @matriz = matriz
    end

    # Calcula las dimensiones de la matriz
    # @return [Array<Integer>] array con dos elementos: [filas, columnas]
    def call
      dimensiones = []
      contador_filas = @matriz.size
      contador_columnas = @matriz[0].size
      dimensiones << contador_filas
      dimensiones << contador_columnas
      dimensiones
    end
  end
end

