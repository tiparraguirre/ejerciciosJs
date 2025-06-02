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
		cambiar_animal_estado(animal)
		@animales << animal    
	end

	def eliminar_animal(animal)
		@animales.delete(animal)
		@estado_animales.each do |clave, array|
			array.delete(animal)
		end
	end

	# Agregamos alimentos al stock
	# @params[String] Alimento que quiero stockear
	def agregar_alimento(alimento)
		@alimentos << alimento
	end

	# Cambia el animal a alimentados o no , dependendiendo de si comio o no
	# @paramas[Animal] animal en cuestion
	def cambiar_animal_estado(animal) 
		@estado_animales[:alimentados].delete(animal)
   		@estado_animales[:no_alimentados].delete(animal)
		if animal.comio
		@estado_animales[:alimentados] << animal unless @estado_animales[:alimentados].include?(animal)
	else
		@estado_animales[:no_alimentados] << animal unless @estado_animales[:no_alimentados].include?(animal)
	end
	end
	
	

	# metodo para alimentar a todos los animales en base al stock de alimentos y elimina los alimentos consumidos
	# @return [estado_animales] hash con los animales que comieron y los que no
	def alimentar_animales
		@animales.each do |animal|
			next if @estado_animales[:alimentados].include?(animal)

			@alimentos.each_with_index do |alimento, indice|
				if animal.le_gusta?(alimento)
					animal.alimentar
					animal.ultima_comida = Time.now
					cambiar_animal_estado(animal)
					@alimentos.delete_at(indice)
					break
				end
			end
		end

		@estado_animales
	end

	attr_reader :estado_animales, :animales, :alimentos
end