
function FizzBuzz(e) {
    if (typeof e !== 'number')
    console.log('Não é um número')

    if ((e % 3 === 0) && (e % 5 === 0))
    return 'FizzBuzz'
    
    if (e % 3 === 0) 
        return 'Fizz'

    if (e % 5 === 0) 
        return 'Buzz'

    return e
}

const resp = FizzBuzz(2)
console.log(resp)