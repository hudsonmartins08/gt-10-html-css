const user = {
    nome: "Hudson",
    idade: "25"
}

const produtos = [
    {nome: "maçã", preco: 2.50},
    {nome: "iphone", preco: 5500}
]

const produtosMaiorDeIdade = [
    {nome: "51", preco: 50},
    {nome: "jackDaniels", preco:100}
]

if(user.idade >= 18){
    console.log(produtos, produtosMaiorDeIdade)
} else {
    console.log(produtos)
}