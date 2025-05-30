# Módulo que contiene la lógica para el registro del zoológico.
module Registro
	# Clase registro que almacena a los animales, alimentos en deposito y el estado de los animales que comieron y no
	class Registro 

		# Incializamos un registro 
		# contiene un Array en el cual se le almacenan los animales y alimentos, tambien un hash con los animales alimentados y los que no
		def initialize
			@animales = []
			@alimentos = []
			@estado_animales = {
				alimentados: [],
				no_alimentados: []
			}
		end

		# Agregamos al animal al registro
		# @params[Animal] animal en cuestion
		def agregar_animal(animal)
			@animales << animal    
		end

		# Agregamos alimentos al stock
		# @params[String] Alimento que quiero stockear
		def agregar_alimento(alimento)
			@alimentos << alimento
		end

		# metodo para alimentar a todos los animales en base al stock de alimentos y elimina los alimentos consumidos
		# @return [estado_animales] hash con los animales que comieron y los que no
		def alimentar_animales

			@animales.each do |animal|
				next if @estado_animales[:alimentados].include?(animal)

				@alimentos.each do |alimento|
					if animal.comer(alimento)
						@estado_animales[:alimentados] << animal
						@alimentos.delete_at(@alimentos.index(alimento))
						if @estado_animales[:no_alimentados].include?(animal)
							@estado_animales[:no_alimentados].delete(animal)
						end

						break
					end
				end

				unless @estado_animales[:alimentados].include?(animal) || @estado_animales[:no_alimentados].include?(animal)
					@estado_animales[:no_alimentados] << animal
				end
			end

			@estado_animales
		end

	end

end