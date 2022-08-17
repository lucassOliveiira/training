 

function parImpar(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(`${i}. é numero Par`)
        } else {
            console.log(`${i}. é numero Impar`)
        }
    }
}
parImpar(10)
