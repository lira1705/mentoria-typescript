const button = document.getElementById('button');
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

/**
 * Agora inserimos o parâmetro booleano printarResultado, que vai ajudar a definir se também vamos printar o resultado.
 */
function somaValidaComPrint(numero1: number, numero2: number, printarResultado: boolean) { 
    if (printarResultado) {
        console.log(numero1 + numero2)
    }
    return numero1 + numero2;
}

let printarResultado = true;

// Como a busca pelo button na linha 1 pode trazer um null (já que esse id pode não estar presente no index.html), é importante confirmar se ele tem um valor
if (button) {
    button.addEventListener('click', () => {
        // Estamos passando a variável printarResultado como parâmetro para a função. Como ela contém um valor booleano, o typescript aceita normalmente.
        console.log(somaValidaComPrint(Number(input1.value), Number(input2.value), printarResultado));
    }); 
}