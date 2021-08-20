
function parOuImpar(number) {

/*if((number % 2) == 0) {
    console.log('Esse número é par');
}else {
    console.log('Esse número é ímpar');
}
*/

return (number % 2) == 0 ? 'par' : 'ímpar'
}

console.log(`O número é ${parOuImpar(10)}`)

var numeros = [1, 2, 3, 4, 5]

numeros.push(123)
console.log(numeros)

numeros.pop()
console.log(numeros)

numeros.pop()
console.log(numeros)

numeros.unshift(0)
console.log(numeros)

numeros.shift()
console.log(numeros)

numeros.splice(2,0,6)
console.log(numeros)

numeros.splice(2,1,6)
console.log(numeros)

numeros.splice(2,2,5)
console.log(numeros)

numeros.splice(1,0,3)
console.log(numeros)

numeros.splice(1,1)
console.log(numeros)

numeros.splice(2,1,3)
console.log(numeros)

numeros.push(5)
console.log(numeros)


