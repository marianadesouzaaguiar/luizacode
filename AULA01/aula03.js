// const nomes = ['1. taina', '2. stella', '3. mariana', '4. laoma', '5. anne'];


// for (let i = 1; i <= nomes.length; i++) {
//     console.log(`${i}. ${nomes[i-1]}`);
// }

// console.log(`Escolha um número para ser excluído da lista:`);
// listagem(nomes);

// let escolha = 2;
// console.log(`Opção: ${escolha}`);

// listaNomes.splice(escolha-1, 1);
// console.log('Lista após a exclusão:');
// listagem(listaNomes);



// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(array);

// let tamanho = array.length - 1;
// let aux;

// for (i = 0; i < array.length/2; i++) {
//     aux = array[i]
//     array[i] = array[tamanho]
//     array[tamanho]= aux
//     tamanho--
// }

// console.log(array);

// milésimo primeiro número primo - 1001 
// let primosEncontrados = 0
// let dividendo

// for (dividendo = 2; primosEncontrados < 1001; dividendo++){
//     let ehPrimo = true
//     for(let divisor = 2; dividendo > divisor; divisor++){
//         if(dividendo % divisor == 0){
//             ehPrimo = false;
//             break
//         }
//     }

//     if(ehPrimo == true){
//         primosEncontrados++
//     }
// }
// console.log(`o 1001 numero primo é ${--dividendo}`)

class BombaCombustivel  {
    constructor (capacidade, preco) {
        this.capacidade = capacidade;
        this.preco = preco;
        this.qtdGasolina = capacidade
    }

    encherBomba(){
        if(this.qtdGasolina == this.capacidade) {
            console.log(' A bomba tá full')
        }else {
            this.qtdGasolina = this.capacidade
                console.log("Enchendo a bomba")
            }
        }
    

    abastecerCarro(litros){
        if(this.qtdGasolina >= litros ){
            this.qtdGasolina 
            console.log(`Abastecido com sucesso e você vai pagar ${litros*this.valorGasolina}`)

        }else {
            console.log(`nao temos essa quantidade de gasolina. Só temos ${this.qtdGasolina}`)
        }
    }

    ajustarValor(novoValor) {
        if(novoValor > 0 && typeof(novoValor) == Number) {
            this.valorGasolina = novoValor;
        }else {
            console.log("Vai liberar de graça??? Endoidou???")
        }
        

    }

}

const bomba1 = new BombaCombustivel(10,50)
bomba1.abastecerCarro(20)
bomba1.ajustarValor(5)
bomba1.abastecerCarro(20)
bomba1.abastecerCarro(20)
bomba1.encherBomba()
