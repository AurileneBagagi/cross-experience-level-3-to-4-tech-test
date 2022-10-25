# Linha do Tempo

 **11/10 e 12/10**
 - Clonage do diretorio para o meu GitHub;
 - Instalação e resolução de problemas com o Docker;
 - Executando corretamente o template (Quando recebi o e-mail com a proposta do desafio executei utilizando nextjs);
 - Criando uma branch com meu nome e commitando no repositorio remoto;

**17/10**
- Excutando o projeto utilizando nextjs

**18/10 e 19/10**
- Estudando o codigo e comentando quando necessario.
- Estudando tecnologias "novas".
- Estudando como implementar uma API 

**22/10 A 24/10**
- Estudando API

*Fontes:*

* https://www.youtube.com/watch?v=Q9oVStZ1DJA
* https://www.youtube.com/watch?v=f7JWDLFhR_c
* https://youtube.com/playlist?list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp

*Repositorio que utilzei pra treinar o basico:*

https://github.com/AurileneBagagi/-API-NodeJS-Express-Mongo-

**24/10**
- Iniciando a API
- Instalando dependências: Express e FS

---
# Justificativa
 **Docker**
 
O meu notebook tem um processador Intel(R) Core(TM) i5-6200U CPU @ 2.30GHz 2.40 GHz com a memoria principal de 8GB. Devido aos limites o software Docker consome muita memoria RAM, deixando o restante do procesador instavel, travando muito, o que me impossibilita de trabalhar melhor.

É por essa justificativa que estarei utilizando o nextjs para executar o projeto.

**Express**

Aprendi que o framework "express" é importante para rota e outros fatores de uma API, então estou utilizando no desafio 

**FS**

O framework "fs" auxilia no controle e manuseio de arquivos JSON, por isso utilizei durante o desenvolvimento da API

---

# Dificuldades

- Estudar o código, pois não estava entendendo o nome das clases na estrutura que está.
- Compreender o UIkit (tecnologia nova para mim)
- Implementar uma API em JS (é novidade)
- Teste Automotizado. Eu nunca fiz um teste nesse esquema.
- A linguagem JS. Desde que iniciei os estudo na area de TI programei em python, mesmo programando a um tempo razoavel em JS, percebi que sabia muito pouco. Encontrei muita dificuldade com sintaxes e também com o manuseio de dados (o python possui mais funcionalidades e é mais praticos nesse quesito).
- Arquivos JSON: mesmo sabendo como são modelos de dados orientados a objeto, a falta de um servidor e SGBD intermedirio dificultaram a manipulação do arquivo, logo senti muita dificuldade e tive muitos bugs.
- Frameworks JS.

**API REST**

Fazia um ano que eu não tocava em uma API, e a linguagem JavaScript é um conceito novo que estou tendo contato em 6 meses. Devido a isso, senti muita dificuldade em enteder de fato como uma API trabalha (percebi que sabia pouca coisa), ainda sim estou tendo dificuldade. 

para rodar o minimo que fiz da API, basta utilizar o comando: node api/index.jsx

---

# Planos de desenvolvimento + logica

Essa seção explica como eu pretendia desenvolver o desafio para entregar o desafio com sucesso

**API e conexão com a pagina de planos**

Não muito diferente do que foi desenvolvido, para essa API eu pretendia conectar ao projeto apenas com a função de retornar atributos especificos ("planId", "name", "benefits" e  "paymentInfo") dos planos. Os atributos: "name", "benefits" e  "paymentInfo" seriam retornados visivelmente ao usuario do website da JusBrasil. Já os atributos "planID" E "Benefits" seriam retornados como um "token" caso o usuario desejasse assinar o plano, tornando possivel a verificação e debitação no cartão de credito.

Para isso, o javascript receberia esses valores que seriam atribuido nos card(componente: conteiner) da primira pagina (/pages/index), dentro das divs dos dois utimos conteivers. Os conteiners iriam conter essa estrutura: 2 Divs para o nome do projeto e valor e uma tag do tipo lista para retornar os beneficios,  o botão que retornaria para a pagina (/pages/checkout) e ao lado da lista icones de "check" assim como no site original.

**API e conexão com os cartões de credito**

Como Bruno me explicou que não era necessario armazenar os cartões de credito, eu não ia de fato armazenar. A API aqi teria o trabalho de verificar a credibilidade do cartão de credito e atualizar seu novo saldo (se aprovado a compra). A credibilidade a ser verificada seria a quantidade correta de caracteres, se existe (de acordo com o arqivo disponibilidado em /resources/cards), se a data está dentro da validade e por fim verificaria a disponibilidade do saldo.
