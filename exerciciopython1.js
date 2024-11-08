const prompt = require('prompt-sync')()

// Faça um programa para imprimir:
//    1
//    2   2
//    3   3   3
//    .....
//    n   n   n   n   n   n  ... n
// para um n informado pelo usuário. Use uma função que receba um valor n inteiro e imprima até a n-ésima linha.

function imprimirPadrao(n) {
    // Loop para imprimir cada linha
    for (let i = 1; i <= n; i++) {
      let linha = ''; // String para armazenar a linha atual
      
      // Adiciona o número i, i vezes, na linha
      for (let j = 1; j <= i; j++) {
        linha += i + ' '; // Concatena o número i seguido de um espaço
      }
      
      console.log(linha.trim()); // Imprime a linha (remove o espaço extra no final)
    }
  }
  
  // Solicitar o valor de n ao usuário
  let n = parseInt(prompt('Digite um número inteiro (n):'), 10);
  
  // Verificar se o valor informado é um número válido
  if (isNaN(n) || n <= 0) {
    console.log('Por favor, insira um número inteiro positivo.');
  } else {
    imprimirPadrao(n); // Chama a função para imprimir o padrão
  }
  