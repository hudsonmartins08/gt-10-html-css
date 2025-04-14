//função que receba um objeto carro 
// o objeto contém as propriedades
//  modelo ano cor e km rodado
//se o carro for maior que 2020 ou tiver menos que 1000km 
//exibir "carro novo"
//se não exibe carro usado

const carro = {
    modelo: "civic",
    ano: 2019,
    cor: "preto",
    km: 800
}

function verificarCarro(carro){
    if(carro.ano > 2021 || carro.km <1000){
        console.log("Carro novo")
    }else 
    console.log("Carro usado")
}
verificarCarro(carro)