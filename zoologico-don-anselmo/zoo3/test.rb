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

# agrego comida al registro
registro1.agregar_alimento("hojas")

# agrego comida al registro
registro1.agregar_alimento("pasto")
 

# alimento a todos los animales que esten agregados en el registro
  registro1.alimentar_animales

registro1.agregar_animal(jirafa2)


 registro1.estado_animales

 registro1.alimentos

 registro1.alimentar_animales
 registro1.estado_animales
 registro1.alimentos
# agrego al leon al registro
registro2.agregar_animal(leon)

# agrego a la jirafa al registro
registro2.agregar_animal(jirafa)

# agrego al pinguino al registro
registro2.agregar_animal(pinguino)

# agrego comida al registro
registro2.agregar_alimento("carne")

# agrego comida al registro
registro2.agregar_alimento("hojas")

# agrego comida al registro
registro2.agregar_alimento("pasto")

# alimento a todos los animales que esten agregados en el registro
registro2.alimentar_animales
registro2.agregar_animal(jirafa2)



registro2.alimentar_animales
registro1.agregar_alimento("carne")
registro1.agregar_alimento("pasto")
registro1.agregar_alimento("pescado")
registro2.estado_animales
registro2.agregar_alimento("carne")
registro2.agregar_alimento("pasto")
registro2.agregar_alimento("pescado")
puts registro1.animales
puts registro1.alimentos
puts registro1.estado_animales
puts "||||||"
puts registro1.animales
puts registro1.alimentos
puts registro1.estado_animales
puts "||||||"
zoo1.transferir_animal(jirafa2,zoo2)
puts registro1.animales
puts registro1.alimentos
puts registro1.estado_animales
puts "||||||"
puts registro1.animales
puts registro1.alimentos
puts registro1.estado_animales
puts "||||||"
puts registro1.alimentos
 puts zoo1.cargar_alimento("pescado")
puts registro1.alimentos	
