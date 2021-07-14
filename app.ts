/**
 * A inferência de tipo também funciona para objetos.
 * Se estiver usando o visual studio code, tente passar o mouse por cima de um objeto não tipado e veja a mágica.
*/ 
const desenvolvedor = {
    name: 'Marco',
    idade: 25,
    salario: 15000
}

/**
 * desenvolvedor.salario = "não tem" devolveria um erro, pois foi inferido que desenvolvedor.salario é do tipo number
 * Assim percebemos que enquanto o objeto pode ser escrito de qualquer forma, o uso posterior tem que respeitar a forma como ele foi inicializado
 */

// Nesse caso abaixo a tipagem foi explícita, então é necessário respeitar o tipo durante a criação do objeto.
const carro: {cor: string, numeroDoPneu: number, conversivel: boolean} = {
    cor: 'vermelho',
    numeroDoPneu: 10,
    conversivel: true
}

/**
 * Com esses dois exemplos percebemos que objetos seguem as mesmas regras de variáveis comuns
 * Ambos podem ser inicializadas de qualquer forma, mas depois precisam respeitar o tipo
 * E caso sejam tipados no início, seu primeiro valor tem que respeitar esse tipo
 */