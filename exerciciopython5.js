const prompt = require('prompt-sync')()

// Faça um programa com uma função chamada somaImposto.
// A função possui dois parâmetros formais: taxaImposto,
// que é a quantia de imposto sobre vendas expressa em porcentagem e custo,
// que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.

// function somaImposto(taxaImposto, custo) {
//     let imposto = (taxaImposto / 100) * custo;
//     let custoFinal = custo + imposto;
//     return custoFinal;
//   }
//   let taxaImposto = 15;
//   let custo = 100;
  
//   let custoComImposto = somaImposto(taxaImposto, custo);
  
//   console.log("Custo com imposto: R$", custoComImposto.toFixed(2));

function somaImposto(taxaImposto, custo) {
    const percentualImposto = taxaImposto / 100
    const valorImposto = custo * percentualImposto
    const valorComImposto = custo + valorImposto
    return valorComImposto
}

const custo = parseFloat(prompt(`Informe o valor do produto: `))
const taxa = parseFloat(prompt(`Informe o valor da taxa: `))

console.log(`O vlor com imposto é ${somaImposto(taxa, custo)}`)