# Módulo que contiene la lógica para el registro del zoológico.
module Registro
	# Clase registro que almacena a los animales, alimentos en deposito y dias que contienen que animales comieron y que no
	class Registro 
		attr_reader :alimentos, :animales ,:dias_alimentacion
		
		# Incializamos un registro 
		# contiene un Array en el cual se le almacenan los animales , alimentos  y dias de alimentacion 
		def initialize
			@animales = []
			@alimentos = []
			@dias_alimentacion = []
		end

		# Agregamos al animal al registro
		# @params[Animal] animal en cuestion
		def agregar_animal(animal)
			@animales << animal    
		end

		# Agregamos alimentos al stock
		# @params[Array] Alimento que quiero stockear
		def agregar_alimento(alimento)
			@alimentos << alimento
		end

	
	# agregamos el dia de alimentacion al registro de dias
	# @paramas [Dia] dia que quiero almacenar
		def agregar_dia(dia)
			@dias_alimentacion << dia.estado_dia_completo
		end

	end
end