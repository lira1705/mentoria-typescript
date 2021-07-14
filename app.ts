const button = document.getElementById('button');
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

function somaValidaComPrint(numero1: number, numero2: number, printarResultado: boolean, frase: string) { 
    const resultado = numero1 + numero2;
    if (printarResultado) {
        console.log(frase + resultado);
    }
    return resultado;
}

// Vocês já devem ter percebido que o typescript infere o tipo da variável de acordo com o valor com a qual ela é inicializada
// Como no caso abaixo em que ele já sabe que printarResultado é um booleano
let printarResultado = true;
// Mas também é possível escrever o tipo da variável de forma explícita
let frase: string;
// E só depois iniciar ela
frase = "O número é ";

// Como a busca pelo button na linha 1 pode trazer um null (já que esse id pode não estar presente no index.html), é importante confirmar se ele tem um valor
if (button) {
    button.addEventListener('click', () => {
        console.log(somaValidaComPrint(Number(input1.value), Number(input2.value), printarResultado, frase));
    }); 
}