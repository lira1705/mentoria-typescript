// O any é uma notação que diz que a propriedade pode ter qualquer tipo
let cpf: any;
// Aqui ela recebe uma string
cpf = '01620445000';
// Aqui recebe um boolean
cpf = true;
// E agora um número
cpf = 10;
// O uso de any faz com que typescript trate suas variáveis como JS

// Essa função abaixo espera uma string
function apresentarCPF(cpf: string) {
    console.log(cpf)
}

// E aqui passamos a variável cpf que contém um number, mas como ela é um any, o TS não reclama porque ela pode conter qualquer atributo, inclusive uma string
apresentarCPF(cpf); 
/**
    Usar any tira poder do typescript e pode criar incoerências no seu projeto
    O any é comumente usado quando um objeto desconhecido é manipulado, ou quando uma refatoração de JS para TS é aplicada rapidamente sem tipar os objetos utilizados
    É uma má prática que reduz a velocidade dos times no longo prazo e foge do propósito do typescript
    Com o uso do ESLint é possível configurar seu projeto para não permitir o uso explícito de any
 */