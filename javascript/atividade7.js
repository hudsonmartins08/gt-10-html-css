// uma lista de modelos de carros
const modelos = ["Audi", "BMW", "chrysler", "Fiat", "volkswagem", "chevrolet"]

//adicionar novo modelo

modelos.push("Mustang")
console.log(modelos)

//contagem
console.log(modelos.length)
modelos.push("320i")
console.log(modelos.length)

//remover o último modelo
modelos.pop()

console.log(modelos.length)

//remover um modelo específico
modelos.splice(2, 1) //remove o específico da lista

console.log(modelos)