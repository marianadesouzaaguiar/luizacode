let salario = 220;
let valorAumento;


if (salario <= 280) {
    valorAumento = salario * 0.2
    console.log(`Seu salário era de ${salario}. O percentual de reajuste foi de 20%. O valor do aumento foi de R$ ${valorAumento} e agora você receberá ${salario+valorAumento}.`)
}else if (salario > 280 && salario < 700) {
    valorAumento = salario * 0.15
    console.log(`Seu salário era de ${salario}. O percentual de reajuste foi de 15%. O valor do aumento foi de R$ ${valorAumento} e agora você receberá ${salario+valorAumento}.`)
}else if (salario > 700 && salario <= 1500) {
    valorAumento = salario * 0.1
    console.log(`Seu salário era de ${salario}. O percentual de reajuste foi de 10%. O valor do aumento foi de R$ ${valorAumento} e agora você receberá ${salario+valorAumento}.`)
}else{
    valorAumento = salario * 0.05
    console.log(`Seu salário era de ${salario}. O percentual de reajuste foi de 5%. O valor do aumento foi de R$ ${valorAumento} e agora você receberá ${salario+valorAumento}.`)
}