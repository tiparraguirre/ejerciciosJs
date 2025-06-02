class Animal
  attr_accessor :comio, :ultima_comida

  def initialize
    @comio = false
    @ultima_comida = nil
  end

  def alimentos_preferidos
    raise NotImplementedError
  end

  def le_gusta?(alimento)
    alimentos_preferidos.include?(alimento)
  end

  def alimentar
    @comio = true
  end
end

class Jirafa < Animal
  def alimentos_preferidos
    ["hojas", "pasto"]
  end
end
	class Leon < Animal

		# reescribimos alimentos_preferidos con un array con le que le gusta
		def alimentos_preferidos
			["carne", "pollo", "pescado"]
		end
	end
	class Pinguino < Animal

		# reescribimos alimentos_preferidos con un array con le que le gusta
		def alimentos_preferidos
			["pescado"]
		end

	end

	def alimentar_animales(animales, estado_animales, alimentos)  
	animales.each do |animal|
		next if estado_animales[:alimentados].include?(animal)
		puts alimentos
		puts animal
		alimentos.each_with_index do |alimento, indice|
		if animal.le_gusta?(alimento)
			animal.alimentar
			animal.ultima_comida = Time.now
			cambiar_animal_estado(animal, estado_animales) 
			puts alimentos
			puts animal
			alimentos.delete_at(indice)
			puts alimento + indice.to_s  
		end
		end
	end

	estado_animales
	end

	def cambiar_animal_estado(animal, estado_animales)  
	estado_animales[:alimentados].delete(animal)
	estado_animales[:no_alimentados].delete(animal)

	if animal.comio
		estado_animales[:alimentados] << animal unless estado_animales[:alimentados].include?(animal)
	else
		estado_animales[:no_alimentados] << animal unless estado_animales[:no_alimentados].include?(animal)
	end
	end

animales = []
alimentos = []
estado_animales = {
  alimentados: [],
  no_alimentados: []
}

jirafa1 = Jirafa.new
jirafa2 = Jirafa.new
pinguino1 = Pinguino.new
leon1 = Leon.new
leon2 = Leon.new
animales << jirafa1
animales << jirafa2

animales << leon1
animales << pinguino1
animales << leon2
alimentos << "pasto"
estado_animales[:no_alimentados] << jirafa1
estado_animales[:no_alimentados] << jirafa2	
estado_animales[:no_alimentados] << leon1	
estado_animales[:no_alimentados] << pinguino1
estado_animales[:no_alimentados] << leon2
	alimentos << "pescado"
	alimentos << "cacao"
	alimentos << "pescado"
 puts alimentar_animales(animales, estado_animales, alimentos)
 puts alimentos
