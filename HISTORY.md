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

**Pasta Router**

Essa pasta é responsavel por armazenar as rotas da API para seus endpoint.

**Pasta database**

A pasta contem um arquivo JSON "farce.json" apenas para manter uma conexão logica para o methodo de verificação de integridade de dados dos cartões. Mais informações detalhadas na Seção de *Planos de desenvolvimento + logica*

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

Eu indico que utilizem softwares de API como por exemplo o Postman

rotas: 
- http://localhost:3001/Cards, http://localhost:3001/Plans e http://localhost:3001/Farse para vizualizar os dados por completo.
http://localhost:3001/addCard para adiconar algum card


---

# Planos de desenvolvimento + logica

Essa seção explica como eu pretendia desenvolver o desafio para entregar o desafio com sucesso

**API e conexão com a pagina de planos**

Não muito diferente do que foi desenvolvido, para essa API eu pretendia conectar ao projeto apenas com a função de retornar atributos especificos ("planId", "name", "benefits" e  "paymentInfo") dos planos. Os atributos: "name", "benefits" e  "paymentInfo" seriam retornados visivelmente ao usuario do website da JusBrasil. Já os atributos "planID" E "Benefits" seriam retornados como um "token" caso o usuario desejasse assinar o plano, tornando possivel a verificação e debitação no cartão de credito.

Para isso, o javascript receberia esses valores que seriam atribuido(parametros) nos card(componente: conteiner) da primira pagina (/pages/index), dentro das divs dos dois utimos conteivers. Os conteiners iriam conter essa estrutura: 2 Divs para o nome do projeto e valor e uma tag do tipo lista para retornar os beneficios,  o botão que retornaria para a pagina (/pages/checkout) e ao lado da lista icones de "check" assim como no site original.

**API e conexão com os cartões de credito**

Como Bruno me explicou que não era necessario armazenar os cartões de credito, eu não ia de fato armazenar. A API aqui teria o trabalho de verificar a credibilidade do cartão de credito e atualizar seu novo saldo (se aprovado a compra). A credibilidade a ser verificada seria a quantidade correta de caracteres, se existe (de acordo com o arqivo disponibilidado em /resources/cards), se a data está dentro da validade e por fim verificaria a disponibilidade do saldo.

No que se diz a respeito ao frontend, os valores acrescentados aos inputs seriam "acionados" a API. Onde a API retornaria ao frontend (atravez do JS) uma resposta adequada para o cliente em relação ao seu cartão.

Para essa função responsavel, a API seria estrutrada adequadamente (outros diretorios/arqivos/funções), em que, receberia a chamada do metodo "POST", e os parametros passariam por funções que verificariam a integridade dos dados. Caso alguma dessas funções recusasem o valor, a API retornaria ao JavaScript exatamente qual foi o valor que gerou o erro, o JavaScript receberia esse erro em um componente e retornaria ao usuario o input do erro com o stoke em vermelho e uma mensagem leve abaixo do input informando o erro pedindo conserto. Caso os valores estivessem corretos, os dados não seriam armazenados no arquivo JSON, apenas é retornado ao usuario um pop up(usando JS) de desing ligth informando o plano assinado com sucesso e em 5 segundos retornaria automaticamente a pagina principal.

---

# Feedback

Obrigada a equipe do JusBrasil. Especialmente ao Brunão, Maria Clara, Gabriela Silveira e a Paloma Almeida pelo carinho e paciencia. Uma equipe maravilhosa e profissional, estão de parabéns!