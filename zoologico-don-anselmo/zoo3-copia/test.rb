require_relative 'modulos/cargar_archivos.rb'

# instancio al leon del zoo
leon = Animales::Leon.new

# instancio a la jirafa del zoo
jirafa = Animales::Jirafa.new

# instancio al pinguino del zoo
pinguino = Animales::Pinguino.new
jirafa2 = Animales::Jirafa.new
pinguino2 =  Animales::Pinguino.new
# creo el registro(unico)
registro1 = Registro.new
zoo1 = Zoo.new(registro1,1)

registro2 = Registro.new
zoo2 = Zoo.new(registro2,2)
# agrego al leon al registro
registro1.agregar_animal(leon)

# agrego a la jirafa al registro
registro1.agregar_animal(jirafa)

# agrego al pinguino al registro
registro1.agregar_animal(pinguino)

# agrego comida al registro
registro1.agregar_alimento("carne")
registro1.agregar_alimento("carne")
# agrego comida al registro
registro1.agregar_alimento("hojas")

# agrego comida al registro

registro1.agregar_animal(jirafa2)
puts  registro1.alimentos
puts  registro1.estado_animales
puts "||||||||"
# alimento a todos los animales que esten agregados en el registro

puts  registro1.alimentar_animales
puts  registro1.alimentos
puts  registro1.estado_animales
