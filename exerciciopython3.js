const prompt = require('prompt-sync')()

// Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos.

function questao03(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3;
  }
  
  let numero1 = 5;
  let numero2 = 10;
  let numero3 = 15;
  
  let resultado = questao03(numero1, numero2, numero3);
  
  console.log("A soma dos três números é:", resultado);
  