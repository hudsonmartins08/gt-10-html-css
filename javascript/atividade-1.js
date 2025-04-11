const nome = "Hudson" //texto - string
const idade = 25 // número - number
const altura = 1.80 // número - number
const maiorDeIdade = true //booleano - bolean

console.log("Olá seu nome é " + nome +" você tem " + idade + " anos e sua altura é " + altura)
console.log("Você é maior de idade ? " + maiorDeIdade)

//template string ou string dinamica
const frase = `Olá seu nome é ${nome}`

console.log(frase)