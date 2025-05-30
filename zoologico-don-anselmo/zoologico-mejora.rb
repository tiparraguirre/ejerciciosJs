# Clase padre de las que heredan los animales
class Animal

    # metodo alimentar que tienen que tener todas las clases que lo hereden
    # @return [NotImplementedError] levanta error 
    def alimentos_preferidos
        raise NotImplementedError
    end

    # metodo comer , verifica si su alimento esta en  en su metodo alimentos_preferidos
    # @params [String] necesita un alimento para pasarle a alimentos_preferidos
    # @return [Boolean] true si esta en alimentos_preferidos, false si no
    def comer(alimento)
        alimentos_preferidos.include?(alimento)
    end
end

# Clase Leon que hereda metodos y inicializacion de Animal
class Leon < Animal
    
     # reescribimos alimentos_preferidos con un array con le que le gusta
    def alimentos_preferidos
        ["carne", "pollo", "pescado"]
    end
end

# Clase Pinguino que hereda metodos y inicializacion de Animal
class Pinguino < Animal
    
     # reescribimos alimentos_preferidos con un array con le que le gusta
    def alimentos_preferidos
        ["pescado"]
    end
    
end

# Clase Jirafa que hereda metodos y inicializacion de Animal
class Jirafa < Animal
   
     # reescribimos alimentos_preferidos con un array con le que le gusta
    def alimentos_preferidos
        ["hojas", "pasto"]
    end

end

# Clase registro que almacena a los animales, alimentos en deposito y dias que contienen que animales comieron y que no
class Registro 
    attr_reader :alimentos, :animales
    
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


# Clase DiaAlimentar encargada de alimentar a los animales, reducir stock de alimentos y guardar cuales comieron y cuales no
class DiaAlimentar
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

# instancio al leon del zoo
leon = Leon.new

# instancio a la jirafa del zoo
jirafa = Jirafa.new

# instancio al pinguino del zoo
pinguino = Pinguino.new

# creo el registro(unico)
registro = Registro.new

# creo el dia
dia1 = DiaAlimentar.new(registro, 1)

# agrego al leon al registro
registro.agregar_animal(leon)

# agrego a la jirafa al registro
registro.agregar_animal(jirafa)

# agrego al pinguino al registro
registro.agregar_animal(pinguino)

# agrego comida al registro
registro.agregar_alimento("carne")

# agrego comida al registro
registro.agregar_alimento("hojas")

# agrego comida al registro
registro.agregar_alimento("pasto")

# alimento a todos los animales que esten agregados en el registro
dia1.alimentar_animales

# muestro los animales que comieron y los que no
dia1.estado_dia_completo

# agrego el dia al registro
registro.agregar_dia(dia1)


