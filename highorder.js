// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    return numeros.map(v => v * 2)
}


// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    return numeros.reduce((acc, v) => acc + v,0)
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    return numeros.filter(v => v % 2 === 0)
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};