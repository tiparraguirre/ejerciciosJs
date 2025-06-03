class Zoologico

  # Incializamos un registro 
  # contiene un Array en el cual se le almacenan los animales y alimentos, tambien un hash con los animales alimentados y los que no
  def initialize(numero)
    @numero = numero  
    @animales = []
    @alimentos = []
  end

  # Agregamos al animal al registro
  # @params[Animal] animal en cuestion
  def agregar_animal(animal)
    @animales << animal    
  end

  # Metodo para sacar un animal del Zoologico
  # @params Animal [Object] animal en cuestion
  def eliminar_animal(animal)
    @animales.delete(animal)
  end

  # Agregamos alimentos al stock
  # @params[String] Alimento que quiero stockear
  def agregar_alimento(alimento)
    @alimentos << alimento
  end
 
  # Metodo para transeferir un animal a otro zoologico
  # @params Animal[Object], Zoologico[Object], Animal que se quiere transeferir y Zoologico destino
  def transferir_animal(animal,zoo_destino)
    eliminar_animal(animal)
    zoo_destino.agregar_animal(animal)
  end

  # metodo para saber el estado de los animales , si comieron o no
  # @return estado_animales [hash] hash con dos claves :alimentados y :no_alimentadoss a los que los animales van em base a si comieron o no
  def estado_animales
    estado_animales = {
      alimentados: [],
      no_alimentados: []
    }
    animales.each do |animal|
      if animal.comio
        estado_animales[:alimentados] << animal
      else
        estado_animales[:no_alimentados] << animal
      end
    end
    estado_animales
  end

  # metodo para alimentar a todos los animales en base al stock de alimentos y elimina los alimentos consumidos
  # @return [estado_animales] hash con los animales que comieron y los que no
  def alimentar_animales
    @animales.each do |animal|
      next if animal.comio
      @alimentos.each_with_index do |alimento, indice|
        if animal.alimentar(alimento)                     
          @alimentos.delete_at(indice)
          break
        end
      end
    end

    return estado_animales
  end

  attr_reader :animales, :alimentos
end
