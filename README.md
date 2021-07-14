# Aula de Typescript da Take na plataforma DIO
  
*Bem vindo!!*

O objetivo desse repositório é mostrar exemplos e desafios de typescript que vão dar uma noção geral suficiente da ferramenta para que ela seja usada no dia a dia do desenvolvedor.
  
Para quem é esse repositório:   
* Pessoas que tem vontade de aprender javascript aplicando boas práticas desde o início  
* Pessoas que já usam javascript e querem desaprender hábitos negativos da linguagem   
* Quem já teve dor de cabeça com javascript e tem um trauma a ser curado   

## O que é o Typescript
É um superset do typescript que trás tipagem estática para a linguagem, além de outras features, com o propósito de melhorar a qualidade do código escrito e a sua usabilidade. Como é um superset o código compilado e usado em produção ainda é javascript, porém é um JS mais resiliente e turbinado graças ao uso de TS durante o desenvolvimento.

## Do que você vai precisar
Ferramentas necessárias:  
* Do Node instalado na sua máquina  
* Instalar o typescript usando o npm (npm install -g typescript)
    * É interessante que ele seja instalado de forma global, para que o usuário possa usar a biblioteca a qualquer momento e em qualquer projeto para fazer testes rápidos com o TS.
* De uma IDE como o visual studio code  

Requisitos técnicos:  
* Lógica de programação
* Mas é melhor ainda se tiver um conhecimento básico de javascript  

## Sobre a estrutura de commits  
Os commits foram feitos de tal forma que o usuário pode ler commit a commit em ordem de publicação e acompanhar gradualmente a criação do repositório e a lógica aplicada. É recomendado que o primeiro estudo seja feito dessa forma. Pequenos erros nos comentários ou de gramática podem ser encontrados no caminho (consequências do programador que estuda de madrugada), mas eles já foram devidamente corrigidos na última versão da main.

## Estrutura do repositório 
* *src* 
    * Contém arquivos com exemplos de uso de TS e JS comentados para facilitar o entendimento da ferramenta
* *desafios*
    * Contém vários arquivos JS que podem ser refatorados para solidificar o conhecimento adquirido na aula
* *index.html*
    * É onde está a chamada para o arquivo app.js e pode ser manipulado a vontade para testarem seus scripts
* *tsconfig.json*
    * O coração do TS que configura suas funcionalidades.  
* *package.json*
    * Nesse arquivo foram colocados alguns scripts com o propósito de facilitar a vida de quem usar esse repositório
        * start
            * Inicia o *lite-server*, que vai escutar modificações no index.html e em seus arquivos importados. É útil caso queira fazer testes no browser. A porta disposta normalmente é a *localhost:3000*
        * watch  
            * Roda o *tsc --watch* com o propósito de compilar constantemente qualquer coisa que for editada nos arquivos TS para sua contraparte em JS. Esse comando evita que *tsc* tenha que ser digitado constantemente para fazer a compilação.

## Sobre o tsconfig.json  
* Algumas configurações e funcionalidades legais são:
    1. Opções básicas:
        * target
            * Define para qual versão do ECMAScript o typescript vai ser convertido
        * lib
            * Define quais bibliotecas vão vir por default com o TS. Isso é bacana caso o TS esteja sendo usado no backend e a iteração com o DOM não é necessária. Como teste, tentem remover as bibliotecas do DOM e olhem seu código enchendo de erros porque não sabe o que é um document
        * sourceMap
            * Cria arquivos .map.js que geram uma cópia do seu arquivo TS no source do browser (aquele do inspect). Podem ser debugados via breakpoint direto no browser e são uma excelente ajuda, já que o código compilado de JS é menos legível que o TS.
        * outDir
            * Pasta para onde seus arquivos JS serão enviados
        * rootDir
            * Pasta de onde seus arquivos TS serão coletados. Pode ser necessário inserir a opção include fora do *compilerOptions* com a pasta *src* inclusa
    2. Opções de checagem de tipo:
        * strict
            * Marca todas opções de checagem de tipo como verdadeiras. Ideal caso seja a intenção do usuário ter o código mais consistente possível
        * noImplicitAny
            * Levanta erro caso variáveis não estejam tipadas. Caso essa seja a intenção, um "any" tem que ser explicitamente tipado
        * strictNullChecks
            * Pode levantar erro caso uma variável em uso seja potencialmente nula. 
                * Ex: um botão que foi buscado usando um getElementById que não necessariamente vai encontrar um elemento é usado para escutar um evento.
    3. Outras opções
        * noUnusedLocals
            * Levanta erro sempre que uma variável local não está sendo utilizada, como um let dentro de uma função
        * nuUnusedParameters
            * Mesmo caso de noUnusedLocals, mas para parâmetros de função
        * noImplicitReturns
            * Levanta um erro caso uma função tenha caminhos que retornam valor e outros que não retornam
    4. Existem outras regras e explicações mais elaboradas na documentação oficial (https://www.typescriptlang.org/tsconfig)
   
## Sobre colaboração 
Sinta-se livre para abrir pull requests com melhorias para ajudar quem quiser aprender mais sobre Typescript. Também podem tirar dúvidas comigo via comentário.
