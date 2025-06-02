# Módulo que agrupa las clases de animales del zoológico.
module Animales
	# Clase Jirafa que hereda metodos y inicializacion de Animal
	class Jirafa < Animal

		# reescribimos alimentos_preferidos con un array con le que le gusta
		def alimentos_preferidos
			["hojas", "pasto"]
		end

	end
end