function aluguelCarro(dias){
    if(dias > 15){
        const ValorPorDia = 200
        const calculo = dias * ValorPorDia
        console.log(calculo)
    }else {
        const ValorPorDia = 250     
        const calculo = dias * ValorPorDia
        console.log(calculo)
    }
}

aluguelCarro(10)
aluguelCarro(15)
aluguelCarro(16)
