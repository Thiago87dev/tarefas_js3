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

function fibonacci(n) {
  if (n <= 0) return 0
  if (n === 1) return 1

  let resultado = fibonacci(n - 1) + fibonacci(n - 2)
  return resultado
}

module.exports = { somaNumeros, ehPar, fibonacci };