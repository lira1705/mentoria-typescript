const button = document.getElementById('button');
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

/**
 * Agora inserimos o parâmetro booleano frase, para deixar o print mais personalizado.
 */
function somaValidaComPrint(numero1: number, numero2: number, printarResultado: boolean, frase: string) { 
    const resultado = numero1 + numero2;
    if (printarResultado) {
        console.log(frase + resultado);
    }
    return resultado;
}

let printarResultado = true;
let frase = "O número é ";

// Como a busca pelo button na linha 1 pode trazer um null (já que esse id pode não estar presente no index.html), é importante confirmar se ele tem um valor
if (button) {
    button.addEventListener('click', () => {
        console.log(somaValidaComPrint(Number(input1.value), Number(input2.value), printarResultado, frase));
    }); 
}