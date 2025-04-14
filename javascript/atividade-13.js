// crie uma função que pegue a idade, gênero e cidade de um usuário
// se o user for do sexo masculino e tiver mais de 18 anos
//exibir precisa se alistar
//se user for do sexo masculino e tiver menos que 18 anos 
// exibir Não pode se alistar

const user = {
    nome: "hudson",
    idade: 20,
    genero: "masculino",
    cidade: "fortaleza"
}

function verificarAlistamento(user){
    if(user.genero == "masculino" && user.idade >18){
        console.log("pode se alistar")
    }else 
        console.log("Não pode se alistar")
}
verificarAlistamento(user)