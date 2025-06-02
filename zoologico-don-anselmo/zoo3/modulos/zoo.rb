# clase zoo encargada de crear zoologicos para la franquicia y acceder a sus registros
class Zoo

	# inicializamos un zoologico con su registro y numero
	# @params [Registro,Number] registro del zoo y su numero
	def initialize(registro, numero)
		@registro = registro
		@numero = numero
	end
	
	# Metodo para mostrar los animales del zoo (llamamos a los animales del registro)
	def animales
		registro.animales
	end

	
	# Metodo para mostrar los alimentos del zoo (llamamos a los alimentos del registro)
	def alimentos_disponibles
		registro.alimentos
	end

	# Metodo para mostrar los animales que comieron del zoo (llamamos al estado de alimentados del registro)
	def alimentados
		registro.estado_animales
	end

	# Metodo para transferir un animal a otro zoo
	# @params[Animal,Zoo] animal a transferir y zoo que lo recibe
	def transferir_animal(animal,zoo_destino)
		zoo_destino.cargar_animal(animal)
		sacar_animal(animal)
	end

	# Metodo para sacar a un animal del zoo
	# @params[Animal] animal en cuestion
	def sacar_animal(animal)
		registro.eliminar_animal(animal)
	end

	
	# Metodo para agregar a un animal al zoo
	# @params[Animal] animal en cuestion
	def cargar_animal(animal)
		registro.agregar_animal(animal)
	end

	
	# Metodo para agregar a un alimento al zoo
	# @params[Alimento] alimento en cuestion
	def cargar_alimento(alimento)
		registro.agregar_alimento(alimento)
	end
	private
	attr_reader :registro
end
