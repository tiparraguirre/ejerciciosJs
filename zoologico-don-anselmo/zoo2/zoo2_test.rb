require_relative 'modulos/cargar_modulos.rb'

# instancio al leon del zoo
leon = Animales::Leon.new

# instancio a la jirafa del zoo
jirafa = Animales::Jirafa.new

# instancio al pinguino del zoo
pinguino = Animales::Pinguino.new

# creo el registro(unico)
registro = Registro::Registro.new

# creo el dia
dia1 = Dia::Alimentar.new(registro, 1)

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

# accedo al hash de alimentacion
registro.dias_alimentacion

# chequeo el stock de alimentos 
registro.alimentos


