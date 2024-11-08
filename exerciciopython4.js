const prompt = require('prompt-sync')()

// Faça um programa, com uma função que necessite de um argumento.
// A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo

function questao04(numero) {
    if (numero > 0) {
      return 'P';
    } else {
      return 'N';
    }
  }
  
  let numero = 10;
  
  let resultado = questao04(numero);
  
  console.log("Resultado:", resultado);
  