# Clase que contiene operacioness para realizarle a una matriz
class MatrizLib

    # inicializa nueva matriz 
    # @params [Array<Array<Numeric>>] matriz de numeros
    def initialize(matriz)
        @matriz = matriz
    end

    # Saca los elementos de la diagonal principal
    # @return [Array<Integer>] devuelve array con los elementos pertenecientes a la diag Principal
    def sacar_elementos_diagonal
        diagonal = []
        @matriz.each_with_index do |fila, f|
            elemento_diagonal = @matriz[f][f]
            diagonal << elemento_diagonal
        end
        diagonal
    end

    # Valida si un elemento pertenece a la matriz en base a sus coordenadas
    # @paramas [Integer] numeros enteros
    # @return [Boolean] devuelve true si esta, false si no esta
    def validar_coordenadas?(f, c)
        f.between?(0, @matriz.size - 1) && c.between?(0, @matriz[f].size - 1)
    end

    # Saca los elementos adyacentes en base a un elemento
    # @params [Integer] numeros enteros
    # @return [Array <Numeric>] Array con los elementos adyacentes del elemento dado 
    def sacar_elementos_adyacentes(f, c)
        posiciones = [
            [f, c - 1], [f, c + 1],
            [f - 1, c], [f + 1, c],
            [f - 1, c - 1], [f - 1, c + 1],
            [f + 1, c + 1], [f + 1, c - 1]
        ]

        elementos_adyacentes = []

        posiciones.each do |pos|
            fila, col = pos
            if fila >= 0 && fila < @matriz.length &&
                col >= 0 && col < @matriz[fila].length
                elementos_adyacentes << @matriz[fila][col]
            end
        end

        elementos_adyacentes
    end

    # Valida si una matriz es valida o no
    # @return [Boolean] false si no es un array , si adentro no tiene arrays , si los elementos no son numeros y si no tiene la misma cantidad de filas que columnas
    def matriz_valida?
        return false unless @matriz.is_a?(Array)

        @matriz.each do |fila|
            return false unless fila.is_a?(Array)

            fila.each do |elemento|
                return false unless elemento.is_a?(Numeric)
            end
        end

        utils = MatrizUtils::SacarDimensionesMatriz.new(@matriz).call
        filas = utils[0]

        filas.times do |f|
            return false if @matriz[f].size != utils[1]
        end

        true
    end

    # saca el elemento central (redondeado hacia arriba si no es exacto)
    # @return [Numeric] elemento central 
    def sacar_centro
        utils = MatrizUtils::SacarDimensionesMatriz.new(@matriz).call  
        filas = utils[0]
        columnas = utils[1]
        fila_medio = (filas / 2.0).floor
        columna_medio = (columnas / 2.0).floor
        @matriz[fila_medio][columna_medio]
    end

    # valida si una matriz es cuadrada 
    # @return [Boolean] false si es orden PxM , true si es orden NxN 
    def matriz_cuadrada?
        utils = MatrizUtils::SacarDimensionesMatriz.new(@matriz).call 
        return false unless utils[0] == utils[1]
        true
    end

end


matriz = [
    [1,2,3,5],
    [2,5,6,5],
    [1,2,3,6],
    [1,2,3,4]
]

puts MatrizLib.new(matriz).sacar_centro
puts MatrizLib.new(matriz).matriz_cuadrada?
puts MatrizLib.new(matriz).matriz_valida?
