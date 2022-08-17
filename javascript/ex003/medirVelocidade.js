function medirVelocidade(velocidade) {
    if (velocidade <= 70) {
        console.log(`Você está na velocidade de ${velocidade} km/h`)
    }   else {
        const pontos = Math.floor((velocidade - 70) / 5)
        if (pontos >= 12) {
            console.log(`Você está na velocidade de ${velocidade} km/h: CARTEIRA SUSPENSA`)
        } else {
            console.log(`Você tomou ${pontos} pontos na sua carteira!`)
        }
    }
}

medirVelocidade(122)