const user = {
    name: "Hudson",
    altura: 1.75,
    peso: 72,
}
// criar uma função que receba o objeto user 
//e calcule o IMC
//IMC = peso / (altura * altura)
function calcularIMC(user){
    const imc = user.peso / (user.altura * user.altura)

    if(imc < 18.5) {
        return console.log("Abaixo do peso")
    } 
    
    if (imc >= 18.5 && imc < 24.9){
        return console.log("Peso normal")
    } 
    
    if (imc >= 25 && imc < 29.9){
        return console.log("Sobrepeso")
    } 
    if (imc >= 30 && imc < 34.9){
        return console.log("Obesidade grau 1")
    } 
    if (imc >= 35 && imc < 39.9){
        return console.log("Obesidade grau 2")
    }
    if (imc >= 40 ){
       return console.log("Obesidade grau 3")
    }
    
    console.log(imc.toFixed(2))

}
calcularIMC(user)