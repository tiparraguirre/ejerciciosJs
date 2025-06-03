# Módulo que agrupa las clases de animales del zoológico.
module Animales
  # Clase padre de las que heredan los animales
  class Animal
    attr_accessor :comio, :ultima_comida

    # inicializamos un nuevo animal con su ultima comida y si comio o no
    def initialize
      @comio = false
      @ultima_comida = nil
    end

    # metodo alimentar que tienen que tener todas las clases que lo hereden
    # @return [NotImplementedError] levanta error 
    def alimentos_preferidos
      raise NotImplementedError
    end

    # metodo comer , verifica si su alimento esta en  en su metodo alimentos_preferidos
    # @params alimento [String] necesita un alimento para pasarle a alimentos_preferidos
    # @return [Boolean] true si esta en alimentos_preferidos, false si no
    def le_gusta?(alimento)
      alimentos_preferidos.include?(alimento)
    end

    # metodo alimentar , cambia el estado comio , a true
    # @params alimento [String] alimento que se le ofrece al animal
    def alimentar(alimento)
      return false unless le_gusta?(alimento)

      # si le gusta:
      @comio = true
      @ultima_comida = Time.now
      true
    end
  end
end
