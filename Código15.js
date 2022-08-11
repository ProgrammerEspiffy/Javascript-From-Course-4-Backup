
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

//Créditos á Esse Site: https://www.delftstack.com/pt/howto/javascript/javascript-fibonacci/#:~:text=Para%20gerar%20a%20Sequ%C3%AAncia%20de,sequ%C3%AAncia%20de%20Fibonacci%20em%20JavaScript.