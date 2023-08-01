// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    switch (number) {
        case 1:
            return 'Domingo'
        case 2:
            return 'Segunda-feira'
        case 3:
            return 'Terça-feira'
        case 4:
            return 'Quarta-feira'
        case 5:
            return 'Quinta-feira'
        case 6:
            return 'Sexta-feira'
        case 7:
            return 'Sabado'
        default:
            return 'Número inválido'
    }
}

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    switch (code) {
        case 'A':
            return 10.99
        case 'B':
            return 5.99
        case 'C':
            return 7.5
        default:
            return 'Código inválido'
    }
}

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    switch (type) {
        case 'Eletrônicos':
            return 'Tecnologia'
        case 'Roupas':
            return 'Moda'
        case 'Alimentos':
            return 'Alimentação'
        default:
            return 'Categoria desconhecida'
    }
}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };