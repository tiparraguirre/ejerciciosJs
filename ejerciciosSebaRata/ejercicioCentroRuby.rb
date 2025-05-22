def ejercicio_centro(c1, c2)
  return "Coordenadas Invalidas" unless son_coordenadas_validas(c1, c2)
  centro = calcular_centro(c1, c2)
  "centro #{centro}"
end

def son_coordenadas_validas(c1, c2)
  coords_juntas = c1 + c2
  return false unless coords_juntas.length == 4
  return false unless coords_juntas.all? { |pos| pos.is_a?(Numeric) && pos.between?(0, 100) }
  true
end

def calcular_centro(c1, c2)
  centro = [((c1[0] + c2[0]) / 2).ceil, ((c1[1] + c2[1]) / 2).ceil]
  centro
end

COORDENADA_1 = [42, 4]
COORDENADA_2 = [2, 3]

ejercicio_centro(COORDENADA_1, COORDENADA_2)