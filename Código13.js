//valor do número
var valor = 9;

//o Resto
var resto;

//Soma e Multiplicacao
var soma = 0;
var multiplicacao = 1;

// Percorrer todos os valores até chegar no X
for (let index = 0; index <= valor; index++) {

    //calculo de Ímpar ou Par
    resto = index % 2;

    //O If de impar ou par
    if(resto == 0){
        soma = soma + index
    }
    else {
        multiplicacao = multiplicacao * index
    }


}
// Debug
console.log(soma);
console.log(multiplicacao);