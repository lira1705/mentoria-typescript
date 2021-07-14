/**
 * Quando tipamos podemos passar mais de um tipo, como no caso abaixo em que cada parâmetro contém o tipo input, que é igual aos tipos number ou string
 * No exemplo abaixo também ocorre um tratamento interno na função para que ela lide com os diferentes tipos de cada parâmetro
*/

// Também é possível criar tipos! E combinar tipos com esses tipos!
type input = number | string;

function juntar(input1: input, input2: input) {
    let resultado: input;
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
