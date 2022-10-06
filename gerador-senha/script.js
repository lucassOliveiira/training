function passwordGenerate() {
    return Math.random().toString(36).slice(-6)
}
let teste = Array.apply(null, Array(10)).map(passwordGenerate)
console.log(teste)