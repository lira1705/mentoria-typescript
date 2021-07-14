let valor: unknown; // unknown é um tipo que pode receber qualquer valor
valor = 5;
valor = 'Max';
let nome: string;

// nome = valor; Isso não vai funcionar. O tipo unknown não pode ser arbitrariamente atribuído
if (typeof valor === 'string') {
    nome = valor; // Isso funciona. Esse tipo só pode ser atribuido se uma validação for feita
}

let valorAny: any; // Como já foi visto, o any também recebe qualquer valor
valorAny = true;
valorAny = 10
nome = valorAny; // O perigo é que o any pode ser atribuído a qualquer variável tipada sem que seu tipo seja verificado

// Não é uma prática ruim usar unknown, já que ele força uma validação de tipos. Diferente do any, que como já vimos pode ser usado sem se preocupar com tipage.

function geradorDeErro(mensagem: string, codigoDeErro: number): never { // never quer dizer que o script pode ser interrompido ou nunca chegar a um fim
    throw {message: mensagem, errorCode: codigoDeErro }; // Nesse caso ele foi interrompido
}

geradorDeErro('Um erro ocorreu!', 500); // O mesmo tipo poderia ser usado se fosse usado um while loop que nunca é finalizado