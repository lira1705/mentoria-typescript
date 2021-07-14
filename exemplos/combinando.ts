/**
 * Quando tipamos podemos passar mais de um tipo, como no caso abaixo em que cada parâmetro contém os tipos number e string
 * No exemplo abaixo também ocorre um tratamento interno na função para que ela lide com os diferentes tipos de cada parâmetro
*/
function juntar(input1: number | string, input2: number | string) {
    let resultado: number | string;
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        resultado = input1.toString() + input2.toString();
    } else {
        resultado = input1 + input2
    }
    return resultado;
}

// E aqui temos dois exemplos de uma chamada para essa função, um com strings e um com números
console.log(juntar('bom ', 'dia'));
console.log(juntar(1, 2));
