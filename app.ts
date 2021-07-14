const button = document.getElementById('button');
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

/**
 * Diferente do exemplo de JS anterior, essa função valida se seus parâmetros são número
 * Se somaValida("4", 5) for escrito, o typescript vai levantar um erro e dizer que o tipo string não é um number
 */
function somaValida(numero1: number, numero2: number) { 
    return numero1 + numero2;
}

// Como a busca pelo button na linha 1 pode trazer um null (já que esse id pode não estar presente no index.html), é importante confirmar se ele tem um valor
if (button) {
    button.addEventListener('click', () => {
        // Como a função somaValida espera dois numbers, aqui fazemos a conversão
        console.log(somaValida(Number(input1.value), Number(input2.value)));
    }); 
}