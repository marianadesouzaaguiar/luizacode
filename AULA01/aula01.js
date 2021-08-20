var number1 = 45;
var number2 = 23;

var result = (number1 + number2)/2;
console.log(`O resultado da media foi ${result}`);



console.log("Eu sou maravilhosa!!!!!");

var nome = "Celiane";

console.log(`${nome} é maravilhosa!!!`);


var peso = 48;
var altura = 1.66;
var imc = peso/ (altura * altura);
console.log(`O resultado do seu IMC foi de ${imc}`)

var first = 10;
var second = 27;
var result = first > second ? 'First é maior' : 'Second é maior';
console.log(result);


var nota1 = 7;
var nota2 = 8;
var media = (nota1 + nota2)/2

var result = media >= 7 ? `Sua media final foi:${media}. Aprovado` : `Sua media final foi:${media}. Reprovado.`  

console.log(result);

var nome1 = "Mariana";
var nome2 = "Mariana";

var result = nome1 == nome2;
console.log(result);


var first = "1";
var second = 1;

var result = first == second ? "igual" : "diferente";

console.log(`O número ${first} é ${result} ao número ${second}`);


var bola, pipa;
bola = true;
pipa = false;

var resultado = bola && pipa;
console.log(resultado)

var idade = 20;

var check =  (idade >= 16 && idade <= 18) || (idade > 60)  ? 'Você vai pagar meia entrada' : "Você vai pagar inteira"

console.log(check)



let massa = 51;
let height = 1.66;
let indice = massa / (height * height);

if (indice < 19.1){
    console.log("abaixo do peso")
}else if (indice > 19.1 && imc < 25.8){
    console.log("peso normal")
}else if (indice > 25.8 && imc < 27.3) {
    console.log("marginalmente acima do peso")
}else if(indice > 27.3 && imc < 32.3){
    console.log("acima do peso")
}else {
    console.log("Lascou!!!!")
}

var letra = "E"

switch (letra) {
    case 'A':
        console.log('Anne')
        break
    case 'B':
        console.log('Bianca')
        break
    case 'C':
        console.log('Carla')
        break
    case 'D':
        console.log('Dani')
        break
    default:
        console.log('letra indisponível')
}

var codigo = 100;
var qtdade = 5;

switch (codigo) {
    case 100:
        total = 1.20 * qtdade
        console.log(`seu pedido custa R$ ${total}`)
        break
    case 101:
        total = 1.30 * qtdade
        console.log(`seu pedido custa R$ ${total}`)
        break
    case 102:
        total = 1.50 * qtdade
        console.log(`seu pedido custa ${total}`)
        break
    case 103:
        total = 1.20 * qtdade
        console.log(`seu pedido custa ${total}`)
        break
    case 104:
        total = 1.30 * qtdade
        console.log(`seu pedido custa ${total}`)
        break
    case 105:
        total = 1.00 * qtdade
        console.log(`seu pedido custa ${total}`)
        break
    default:
        console.log('faça outro pedido! código inválido')
}


let numero;

     for (let numero = 10; (numero <= 500) ; numero++){
         if(numero % 18 == 0){
            console.log(`o numero é ${numero}`)
            break;
         }
     }


var count = 0;

while (count < 10) {
    console.log(count)
    count++
}

