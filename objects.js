// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    return {
        perimetro: (retangulo.altura * 2) + (retangulo.largura * 2),
        area: retangulo.altura * retangulo.largura
    }
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    return pessoa.idade > 18
}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    return `${obj.nome} ${obj.idade} ${obj.cidade}`
}

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
