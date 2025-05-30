# Módulo que contiene la lógica para gestionar los días de alimentación.
module Dia
# Clase Alimentar encargada de alimentar a los animales, reducir stock de alimentos y guardar cuales comieron y cuales no
	class Alimentar
		attr_reader :estado_animales

		# inicializamos el dia
		# @params [Registro, Integer] registro al cual accederemos a sus atributos y numero del dia
		# contiene un hash el cual almacena los animales que comieron y los que no
		def initialize(registro, dia)
			@registro = registro
			@dia = dia
			@estado_animales = {
				alimentados: [],
				no_alimentados: []
			}
		end
		
		# metodo para devolver el dia y el estado de los animales que comieron o no
		def estado_dia_completo
			"dia#{@dia} = #{@estado_animales}"
		end

		# metodo para alimentar a todos los animales en base al stock de alimentos  y animales que hay en registro |y elimina los alimentos consumidos
		# @return [estado_animales] hash con los animales que comieron y los que no
		def alimentar_animales
		
			@registro.animales.each do |animal|
				next if @estado_animales[:alimentados].include?(animal)

				@registro.alimentos.each do |alimento|
					if animal.comer(alimento)
						@estado_animales[:alimentados] << animal
						@registro.alimentos.delete_at(@registro.alimentos.index(alimento))
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