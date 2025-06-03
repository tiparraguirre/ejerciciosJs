require_relative 'modulos/cargar_archivos.rb'

# Instancio al león del zoo
leon1 = Animales::Leon.new

# Instancio a la jirafa del zoo
jirafa1 = Animales::Jirafa.new

# Instancio al pingüino del zoo
pinguino1 = Animales::Pinguino.new
jirafa2 = Animales::Jirafa.new
pinguino2 = Animales::Pinguino.new
leon2 = Animales::Leon.new

# Creo el registro (único)
zoo1 = Zoologico.new(1)
zoo2 = Zoologico.new(2)

zoo1.agregar_animal(leon1)
zoo1.agregar_animal(jirafa1)
zoo1.agregar_animal(pinguino1)

zoo2.agregar_animal(leon2)
zoo2.agregar_animal(pinguino2)
zoo2.agregar_animal(jirafa2)

zoo1.agregar_alimento("pasto")
zoo1.agregar_alimento("carne")
zoo1.agregar_alimento("pescado")


zoo2.agregar_alimento("pescado")
zoo2.agregar_alimento("pescado")
zoo2.agregar_alimento("hojas")
zoo2.agregar_alimento("pescado")





zoo1.transferir_animal(leon1,zoo2)
zoo2.alimentar_animales


