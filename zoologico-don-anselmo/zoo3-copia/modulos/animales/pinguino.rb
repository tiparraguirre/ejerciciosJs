# Módulo que agrupa las clases de animales del zoológico.
module Animales
	# Clase Pinguino que hereda metodos y inicializacion de Animal
	class Pinguino < Animal

		# reescribimos alimentos_preferidos con un array con le que le gusta
		def alimentos_preferidos
			["pescado"]
		end

	end
end