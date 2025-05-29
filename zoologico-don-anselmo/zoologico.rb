# Clase padre de las que heredan los animales
class Animal
    attr_reader :alimento
    attr_reader :especie

    # inicializamos nuevo animal
    # @params[String] especie del animal y que tipo de alimento come
    def initialize(especie, alimento)
        @especie  = especie
        @alimento = alimento
    end

    # accion genrerica del animal
    def accion
        "accion generica"
    end

    private

    attr_writer :especie
end

# Clase Leon que hereda metodos y inicializacion de Animal
class Leon < Animal

    # Accion del Leon 
    # @return [string] "Ruge"
    def accion
        "Ruge"
    end
end

# Clase Pinguino que hereda metodos y inicializacion de Animal
class Pinguino < Animal

    # Accion del pinguino
    # @return [string "Nada"
    def accion 
        "Nada"
    end
end

# Clase Jirafa que hereda metodos y inicializacion de Animal
class Jirafa < Animal

    # Accion de la Jirafa
    # @return [string] "Estira el cuello"
    def accion
        "Estira el cuello"
    end
end

# Clase registro que almacena a los animales y se le realiza distintas acciones
class Registro 

    # Incializamos un registro 
    # contiene un Array en el cual se le almacenan los animales
    def initialize
        @registro = []
    end

    # Agregamos al animal al registro
    # @params [Object] animal en cuestion
    def agregar_animal(animal)
        @registro << animal    
    end

    # metodo para alimetnar a todos los animales agregados en el registro       
    # @return [string] animales alimentados con su alimento correspondiente
    def alimentar_animales
        @registro.map { |animal| "alimentando #{animal.especie} con #{animal.alimento}" }.join("\n")
    end

    # metodo para estimular a todos los animales y que hagan su accion
    # @return [String] animal y su accion
    def estimular_animales
        @registro.map { |animal| "#{animal.especie} #{animal.accion}" }.join("\n")
    end

    # metodo para alimentar a un animal en especifico
    # @params[Object] animal a alimentar
    # @return [string] animal alimentado con su respectivo alimento
    def alimentar_animal(animal)
        "alimentando #{animal.especie} con #{animal.alimento}"
    end

    # metodo para estimular a un animal en especifico
    # @params[Object] animal a estimular
    # @return [string] animal y su accion 
    def estimular_animal(animal)
        "#{animal.especie} #{animal.accion}"
    end
end

# instancio al leon del zoo
leon = Leon.new("leon", "carne")

# instancio a la jirafa del zoo
jirafa = Jirafa.new("jirafa", "hojas")

# instancio al pinguino del zoo
pinguino = Pinguino.new("pinguino", "pescado")

# creo el registro(unico)
registro = Registro.new

# agrego al leon al registro
registro.agregar_animal(leon)

# agrego a la jirafa al registro
registro.agregar_animal(jirafa)

# agrego al pinguino al registro
registro.agregar_animal(pinguino)

# alimento a todos los animales que esten agregados en el registro
registro.alimentar_animales

# estimulo a todos los animales que esten agregados al registro
registro.estimular_animales

# alimento al leon unicamente
registro.alimentar_animal(leon)

# estimulo a la girafa unicamente
registro.estimular_animal(jirafa)
