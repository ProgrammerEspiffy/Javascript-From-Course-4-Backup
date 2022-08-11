
//Definir os Números da Lista
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

//Calculo Fibonacci
for (var i = 2; i < 8; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

//Debug
console.log(fibonacci);