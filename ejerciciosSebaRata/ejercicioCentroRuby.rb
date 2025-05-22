def ejercicioCentro(c1,c2)
	return "Coordenadas Invalidas"	 unless sonCoordenadasValidas(c1,c2)
		centro = calcularCentro(c1,c2)
		return "centro #{centro}"
end

def sonCoordenadasValidas(c1, c2)
  coordsJuntas = c1 + c2
  return false unless coordsJuntas.length == 4
  return false unless coordsJuntas.all? { |pos| pos.is_a?(Numeric) && pos.between?(0, 100) }
  true
end

def calcularCentro(c1,c2)
	centro = [((c1[0]+ c2[0]) / 2 ).ceil, ((c1[1] + c1[1]) / 2).ceil]
	centro
end

	c1 = [42,4]
	c2 = [2,3]
ejercicioCentro(c1,c2)