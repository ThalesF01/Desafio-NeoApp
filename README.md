# Desafio front-end NeoApp

Este é um desafio de um processo seletivo para desenvolvedor front-end junior da NeoApp, onde o objetivo é criar um loja de quadrinhos virtual, utilizando a api da marvel: https://developer.marvel.com/

### O que é esperado do desafio: 
 
- Utilização de ReactJs ou NextJs
- Estilização feita com Styled Components
- Realizar teste E2E com Cypress nos fluxos que achar necessário
- Que a UI seja autoral do participante, esteticamente bonita e simples de usar
- Layout responsivo / mobile first
- Ver o website rodando em algum host estático (Heroku, Netlify, Vercel, Github Pages, etc)

### O que impressionaria:

- Utilização de Redux Toolkit para gerenciamento de estado global
- HTML escrito de maneira semântica
- Animações em CSS ou com alguma biblioteca externa (Cuidado com a performance do seu website😄)
- Utilização de Docker na conteinerização da aplicação

### O que não gostaria:

- Código confuso e bagunçado
- Um único commit contendo todas as alterações do projeto. Desejamos ver o histórico da implementação das features
- Descobrir que o teste não foi feito por você
- Descobrir que seus componentes são componentes prontos de alguma lib visual

### Como é feita a avaliação:

- Verificaremos se os desafios propostos foram solucionados
- Avaliaremos a componentização dos itens em tela
- Organização, semântica, estrutura e legibilidade do código
- Responsividade
- Verificaremos também seu README. Portanto, capriche! Conte um pouco de como você pensou os passos da criação do website.

### O essencial para realizar a tarefa:

- Uma listagem paginada das histórias em quadrinhos (HQ's);
- Uma página de visualização individual da HQ;
- E o carrinho

### Requisitos opcionais:

- Na listagem de HQ's, 10% dos quadrinhos mostrados devem ser marcados como raros aleatoriamente ao carregar;
- O carrinho deve apresentar a possibilidade de inserir um cupom de desconto com validação mock, sem API;
- Por fim, existiriam dois tipos de cupons: os cupons comuns e os raros. Que seriam aplicados somente para HQ's respectivamente comuns e raras.
- OBS: Os cupons devem ser adicionados no fim do seu README

## Como eu executei:

Este desafio foi proposto para realiza-lo em cerca de 1 semana, no comecei eu achei que seria impossível realizar tal tarefa nesse período de tempo, era um projeto mais complexo do que os que eu já havia feito, com diversos requisitos e tecnologias que eu imaginei que não conseguiria fazer. Mas só da pra saber tentando, então reservei longas horas dos meus dias para tentar e ver como eu iria me sair com uma tarefa tão complexa para mim em tão pouco tempo.

E com muita surpresa e orgulho do que eu consegui produzir, o resultado ficou muito melhor do que eu imaginei no primeiro dia de produção, no total eu fiquei 6 dias codificando e arrumando diversos bugs para tentar o melhor projeto, e eu vou explicar o que eu fiz e como surgiram as ideias em cada 1 desses dias.

Antes disso, apenas resaltando que, por falta de tempo (conhecimento rsrs), alguns dos requisitos que foram propostos não foram implementados, mas como eu gostei muito de fazer essa aplicação, deixarei ela em meu portfolio e continuarei trabalhando nela adicionado futuras atualizações.

### - Dia 1:

No primeiro dia, eu comecei a me organizar e pensar em como estruturar esse projeto, eu não conhecia a API da marvel e nem como utiliza-la, então a primeira coisa que fiz foi ler a documentação no site ofical e procurar vídeos de outras pessoas que já consumiram, para usar de referência. Irei deixar o link dos vídeos que usei de consulta no final do README. 

Para realizar a requisição, eu utilizei o axios, uma biblioteca client HTTP, lendo a documentação do site, descobri que para conseguir os dados, era necessário a URL da pagina desejada, adicionando um timestamp, a chave publica que é gerada pelo site ao criar uma conta, e um hash com o timestamp + chave privada gerada pelo site + chave publica gerada pelo site.

Após longos testes e requisições má sucedidas, eu consegui a requisição e inserir os dados em um array usando o useState no react.

### - Dia 2:

No segundo dia, eu comecei a pensar em quais dados eu iria usar, também criei uma outra aquisição, onde eu iria fazer duas paginas, uma sendo as das Hqs e outra dos personagens, apenas para dar mais conteúdo na aplicação. Nesse dia também comecei as tentativas de inserir esses dados na tela, depois de ver alguns exemplos, usando o map no array de objetos que requisitei da api, consegui inserir na tela todos os dados que eu queria. Criando uma página com diversas HQ, a pagina listada no caso. 

E só um adendo, que em alguns desses objetos, na propria API da Marvel, pode ser que nem todos tenham esses dados, como a imagem por exemplo, onde várias estarão como not founded pois na propria API da Marvel não tem ela, isso se repete com preço e descrição. Nos casos em que não houver esses dados, será informado na tela uma mensagem por exemplo.

Junto a tudo isso, fiz um sistema também de rotas no useNavigate do react-router-dom, onde criei uma pagina home, que teria um header com links para poder navegar entre as páginas das comics e dos charactes. Ainda com rotas, também criei a pagina de vizualição única da HQ, onde a imagem da HQ seria um link, que passaria o id da HQ para a rota, e assim indo para essa visualização, onde teriam os detalhes da HQ. Para conseguir usar o id da HQ na visuzalição unica, eu utilizei o useParams do react-router-dom.

### - Dia 3:

No terceiro dia eu surtei rsrs. Após inserir os dados na tela, criar a pagina das hqs, e da vizualição única, eu achei que estava indo bem, que as coisas estavam indo muito bem alias, então decidi começar a fazer o sistema de carrinho de compras, detalhe que eu nunca havia feito um, então seria uma novidade para mim. Porém, eu não imaginava que iria sofrer tanto para isso, pesquisei mil maneiras de fazer, assiti 50 tutorias, e nada dava certo. Eu estava enlouquecendo, havia ficado 1 dia inteiro nem conseguir produizar nada, e o tempo passando, os dias diminuindo... 

Então nesse dia, achei melhor parar por enquanto com a ideia do carrinho e focar em outra coisa só pra não perder o dia, então comecei a fazer a estilização da pagina com styled components. Essa era uma tecnologia que eu nunca havia usado também, mas que me surpreendeu muito de uma forma positiva, eu achei de facil entendimento, e melhora e muito visualmente o codigo, depois de alguns videos assistidos, foi por em prática, e por felicidade, eu peguei rápido o jeito da coisa e consegui estilizar grande parte da apliação e não "perder o dia". 

Os arquivos de estilização estão nomeados de acordo com suas funções nas pastas, mainStyles dentro da pagina *main* em *components* serve para estilizar a pagina home do projeto. A maior parte dos arquivos de estilização estão dentro da pasta *styles*, o *cartStyle*s é referente ao carrinho de compras, *list* é responsavel pela pagina listada, tanto das comics quanto dos characters, e *view* é responsavel pelas paginas de vizualição unica.

### - Dia 4:

Quarto dia eu terminei de estilizar todas as paginas, o layout eu me inspirei muito no mesmo que usei para criar meu portfolio, utilizei das mesmas cores, animações, etc. Então foi um processo rapido, depois disso eu comecei a fazer a responsatividade (acho que é assim que escreve rs), essa parte foi um tanto demorado, pois eu estava sendo muito rigido em como eu queria que ficasse, nesse mesmo dia eu subi para produção no vercel e comecei a enviar o link para amigos testarem e procurarem bugs e falhas, e eles acharam varios... Então lá foi eu consertar todos eles.

Essa parte de deixar responsivo demorou um pouco mais do que imaginei, então no final do dia, com o pouco de tempo que tinha me restado, eu aproveitei pra fazer um sistema de paginas numeradas das comics e characters, onde haveriam botões que ao clicar, mudariam os dados na tela referente ao numero da paginda em que estiver. Eu defini na URL da requisição o limit para 30 objetos e o numero de paginas no total como 5, então haveriam 6 itens por paginas, eu pretendia fazer um sistema em que o proprio usuario escolheria o limit de objetos, porém pela falta de tempo, decidi abandonar. Após algumas tentativas falhas, blogs com explicações diversas, e alguns tutorias gringos, eu criei um sistema onde se cria um novo array de objetos cortado, e ao clicar no botão que troca de pagina, ele se atualizaria de acordo com o numero da pagina.

Nesse dia eu tentei fazer o sistema de criação das comics raras geradas aleatoriamentes, eu até consegui criar um array de objetos em que ele criava de forma aleatoria 10% de raros e o resto sendo comuns, mas eu não consegui inseri-las nas comics, e for falta de tempo e sono também (estava de madrugada já), resolvi abandonar a ideia também.

Depois de terminar esse sistema, lá fui eu resolver a questão da responsatividade das paginas e estilização dos botões, adicionando animação e de acordo com o design das paginas.

### - Dia 5:

Dia 5 era um sabado, e o projeto deveria ser entregue até domingo 23:59, então me restavam dois dias para fazer o maximo de atualizações possiveis, porem eu tinha compromissos para o final de semana, em que eu não poderia faltar, então comecei a rushar o projeto e botar prioridade maxima para ele nesses ultimos dias.

Como eu ainda estava revoltado com a situaçao do carrinho de compras, eu decidi usar esse quinto dia inteiro para tentar faze-lo denovo, então lá fui eu tentar achar um jeito, procurando mil videos, blogs, codigos de amigos... tentei usar o sistema de props do propio react junto com useState, tentei aprender e usar o useContext junto com o useState, nesse metodo estava indo bem até, mas eu fiquei preso uma hora e não consegui avançar, então decidi desistir desse modo. E depois de horas, eu cosnegui achar um codigo simples de carrinho de compras, onde eu adaptei ao meu sistema e deu certo.

Então só reutilizei o sistema que havia feito para mostrar a lista das comics e characters com o .map e fui adaptando ao modo que eu queria. Coloquei um useState para calcular o valor final da compra também, não adicionando o valor nulo das comics que não haviam os dados. Eu ainda pretendia colocar botão em que ao clicar, resetaria o valor final da compra e apareceria uma pagina/mensagem agradecendo pela compra. Mas, pela falta de tempo mais uma vez, não consegui adicionar. Depois só deixar responsivo e estava pronto.

### - Dia 6:

E por fim o ultimo dia que eu tinha para enviar o projeto, eu havia planejado deixar esse dia apenas para otimizar o código, deixar organizado e de facil leitura, talvez adicionar algo caso desse tempo, e documentar todo o meu processo de criação aqui no ReadMe.

Porém, como eu havia alguns compromissos nesse dia, não consegui investir tantas horas para o projeto, então acabei não conseguindo adicionar tantas novidades, apenas dei uma limpada no codigo, coloquei alguns comentarios para melhor entendimento, deletei itens desnecessarios para a aplicação, e resolvi pegar todas as minhas anotações desses ultimos dias e fazer esse ReadMe.

## Encerramento

Para encerrar, esse foi um projeto com certeza muito desafiador para mim, de inicio eu estava um tanto aflito, não sabia se iria valer a pena fazer, se iria ficar legal... mas eu não tinha nada a perder, então dei a cara a tapa e fui pra cima.

E com certeza foi de muito aprendizado, eu consegui colocar todas as minhas habilidades em front-end nesse desafio, e colocar um prazo para ainda entregar, fez com que eu desse o meu máximo, na questão de me organizar, fazer o melhor que eu posso em pouco tempo, trabalhar com "pressão", pesquisar diversas fontes, adaptar sempre os codigos com a minha lógica.

Então mesmo que o meu não seja o melhor, eu sei que já valeu muito a pena começar esse projeto, e com certeza trabalharei mais nele, adicionando mais e mais coisas, e deixar ele de portfolio. Serviu tambem pra provar mais uma vez que de fato, programar é o que eu amo, não consigo uma sensação parecida em ficar horas em frente a tela, teclando infinitamente, e depois de horas conseguir solucionar os bugs, deixar a minha aplicação bonita e responsiva, da maneira que eu queria, é de uma felicidade sem igual kk.

<<<<<<< HEAD
Enfim, é isso. Deixarei o link para produção aqui: https://desafio-neo-app.vercel.app/
=======
Enfim, é isso. Deixarei o link para produção aqui: 
>>>>>>> 62f9596f8f5e1bc4befcd6fa16ca824247cf282b
