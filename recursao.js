// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  if(n === 1) return n
  let resultado = n + somaNumeros(n - 1)
  return resultado
}

// Verifica se um número é par
// OBS: Não entendi onde entra a recursão nesse exercicio.
function ehPar(number) {
  return number % 2 === 0 
}

//OBS: Confesso que nesse exercício eu me baseei em um algoritmo que colocaram no discord
function fibonacci(n) {
  if(n === 1) return [0,1]
  let resultado = fibonacci(n - 1)
  resultado.push(resultado[resultado.length - 1] + resultado[resultado.length - 2])
  return resultado
}

module.exports = { somaNumeros, ehPar, fibonacci };