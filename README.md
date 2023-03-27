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

Este desafio foi proposto para ser realizado em cerca de uma semana. No começo, achei que seria impossível realizar tal tarefa nesse período de tempo. Era um projeto mais complexo do que os que eu já havia feito, com diversos requisitos e tecnologias que eunão conhecia e imaginei que não conseguiria fazer. Mas só dá para saber tentando. Então, reservei longas horas dos meus dias para tentar e ver como eu iria me sair com uma tarefa tão complexa em tão pouco tempo.

E com muita surpresa e orgulho do que consegui produzir, o resultado ficou muito melhor do que imaginei que ficaria no primeiro dia de produção. No total, fiquei seis dias codificando e corrigindo diversos bugs para tentar obter o melhor projeto. Vou explicar o que fiz e como surgiram as ideias em cada um desses dias.

Antes disso, apenas ressaltando que, por falta de tempo (e conhecimento, rsrs), alguns dos requisitos propostos não foram implementados. No entanto, como gostei muito de fazer essa aplicação, deixarei em meu portfólio e continuarei trabalhando nela, adicionando futuras atualizações.

### - Dia 1:

No primeiro dia, comecei a me organizar e pensar em como estruturar o projeto. Não conhecia a API da Marvel nem como utilizá-la, então a primeira coisa que fiz foi ler a documentação oficial no site e procurar vídeos de outras pessoas que já a consumiram como referência. Irei deixar o link dos vídeos que utilizei como consulta no final do README.

Para realizar a requisição, utilizei o axios, uma biblioteca client HTTP. Lendo a documentação do site, descobri que para conseguir os dados, era necessário a URL da página desejada, adicionando um timestamp, a chave pública gerada pelo site ao criar uma conta e um hash com o timestamp + chave privada gerada pelo site + chave pública gerada pelo site.

Após longos testes e várias requisições sem sucesso, finalmente consegui realizar a requisição e inserir os dados em um array utilizando o useState do React.

### - Dia 2:

No segundo dia, comecei a pensar em quais dados utilizar e criei uma outra requisição, onde eu iria fazer duas páginas: uma para as HQs e outra para os personagens, para adicionar mais conteúdo na aplicação. Nesse dia, também comecei a tentar inserir esses dados na tela. Após ver alguns exemplos, utilizei o map no array de objetos que requeri da API e consegui inserir na tela todos os dados que queria, criando uma página com diversas HQs - a página listada, por exemplo.

Vale ressaltar que alguns desses objetos, na própria API da Marvel, podem não ter alguns dados, como a imagem, por exemplo. Nessas situações, a mensagem "not founded" será exibida na tela.

Além disso, criei um sistema de rotas com o useNavigate do react-router-dom, onde criei uma página inicial com um header contendo links para navegar entre as páginas das HQs e dos personagens. Utilizando também as rotas, criei uma página de visualização única da HQ, onde a imagem da HQ era um link que passava o ID da HQ para a rota e, assim, ia para a visualização com os detalhes da HQ. Para utilizar o ID da HQ na visualização única, utilizei o useParams do react-router-dom.

### - Dia 3:

No terceiro dia, eu surtei rsrs. Após inserir os dados na tela, criar a página das HQs e a de visualização única, achei que estava indo bem, que as coisas estavam progredindo, então decidi começar a fazer o sistema de carrinho de compras. Detalhe que eu nunca tinha feito antes, então seria uma novidade para mim. Porém, eu não imaginava que ia sofrer tanto para isso. Pesquisei mil maneiras de fazer, assisti 50 tutoriais e nada dava certo. Eu estava enlouquecendo, havia passado um dia inteiro sem conseguir produzir nada e o tempo estava passando, os dias estavam diminuindo...

Então, nesse dia, achei melhor parar temporariamente com a ideia do carrinho e focar em outra coisa só para não perder o dia. Comecei a fazer a estilização da página com styled components. Essa era uma tecnologia que eu nunca havia usado antes, mas que me surpreendeu muito de uma forma positiva. Achei de fácil entendimento e que melhorou muito o visual do código. Depois de assistir alguns vídeos, coloquei em prática e, por felicidade, peguei rápido o jeito da coisa e consegui estilizar grande parte da aplicação sem "perder o dia".

Os arquivos de estilização estão nomeados de acordo com suas funções nas pastas. MainStyles dentro da página main em components serve para estilizar a página inicial do projeto. A maior parte dos arquivos de estilização está dentro da pasta styles. O cartStyles é referente ao carrinho de compras, list é responsável pela página listada, tanto das comics quanto dos personagens, e view é responsável pelas páginas de visualização única.

### - Dia 4:

No quarto dia, terminei de estilizar todas as páginas. Me inspirei muito no mesmo layout que usei para criar meu portfólio e utilizei as mesmas cores, animações, etc. Foi um processo rápido. Depois disso, comecei a fazer a responsividade (acho que é assim que se escreve, rs). Essa parte foi um tanto demorada, pois estava sendo muito rigoroso em relação a como queria que ficasse. Nesse mesmo dia, subi para produção no Vercel e comecei a enviar o link para amigos testarem e procurarem bugs e falhas. Eles encontraram vários, então lá fui eu consertá-los.

Essa parte de deixar responsivo demorou um pouco mais do que imaginei. No final do dia, com o pouco de tempo que tinha sobrado, aproveitei para fazer um sistema de páginas numeradas das comics e characters, onde haveria botões que, ao serem clicados, mudariam os dados na tela referentes ao número da página em que estivessem. Defini na URL da requisição o limite para 30 objetos e o número total de páginas como 5, então haveria um máximo de 6 itens por página. Pretendia fazer um sistema em que o próprio usuário escolheria o limite de objetos, porém, por falta de tempo, decidi abandonar. Após algumas tentativas falhas, blogs com explicações diversas e alguns tutoriais em inglês, criei um sistema onde se cria um novo array de objetos cortados e, ao clicar no botão que troca de página, ele se atualiza de acordo com o número da página.

Tentei fazer o sistema de criação das comics raras geradas aleatoriamente, e até consegui criar um array de objetos em que ele criava aleatoriamente 10% de raros e o restante sendo comuns. Mas não consegui inseri-los nas comics e, por falta de tempo e sono também (já era de madrugada), decidi abandonar a ideia.

Depois de terminar esse sistema, lá fui eu resolver a questão da responsividade das páginas e estilização dos botões, adicionando animação de acordo com o design das páginas.

### - Dia 5:

No quinto dia, era sábado e o projeto deveria ser entregue até às 23:59 de domingo. Restavam-me dois dias para fazer o máximo de atualizações possíveis, porém, eu tinha compromissos no final de semana, dos quais não poderia faltar. Então, comecei a apressar o projeto e a colocá-lo como prioridade máxima para esses últimos dias.

Como ainda estava descontente com a situação do carrinho de compras, decidi usar todo esse quinto dia para tentar criá-lo novamente. Fui procurar por mil vídeos, blogs, códigos de amigos e tentei usar o sistema de props do próprio React junto com o useState. Tentei aprender e usar o useContext junto com o useState, esse método estava indo bem, mas fiquei preso por uma hora e não consegui avançar, então decidi desistir desse modo. Depois de horas, consegui achar um código simples de carrinho de compras, o qual adaptei ao meu sistema e deu certo.

Então, reutilizei o sistema que havia feito para mostrar a lista das comics e characters com o .map e fui adaptando ao modo que eu queria. Coloquei um useState para calcular o valor final da compra também, não adicionando o valor nulo das comics que não tinham os dados. Eu ainda pretendia colocar um botão em que, ao clicar, resetaria o valor final da compra e apareceria uma página/mensagem agradecendo pela compra. Mas, pela falta de tempo, mais uma vez não consegui adicioná-lo. Depois, só deixei o layout responsivo e estava pronto.

### - Dia 6:

E por fim, no último dia que eu tinha para enviar o projeto, eu havia planejado reservá-lo apenas para otimizar o código, organizá-lo para fácil leitura, e possivelmente adicionar algo se houvesse tempo, além de documentar todo o meu processo de criação aqui no ReadMe.

No entanto, como eu tinha alguns compromissos nesse dia, não pude dedicar tantas horas ao projeto. Acabei não sendo capaz de adicionar muitas novidades, apenas fiz uma limpeza no código, adicionei alguns comentários para melhorar o entendimento, deletei itens desnecessários para a aplicação e decidi pegar todas as minhas anotações desses últimos dias para fazer este ReadMe.

## Encerramento

Para encerrar, esse foi um projeto desafiador para mim. No início, eu estava um tanto aflito e não sabia se valeria a pena fazê-lo, se ficaria legal... Mas eu não tinha nada a perder, então dei a cara a tapa e fui em frente.

Com certeza, foi um projeto de grande aprendizado. Consegui colocar todas as minhas habilidades em front-end nesse desafio e o prazo para entrega fez com que eu desse o meu máximo na organização, fizesse o melhor que podia em pouco tempo, trabalhasse com pressão, pesquisasse diversas fontes e adaptasse sempre os códigos com minha lógica.

Então, mesmo que não seja o melhor, eu sei que já valeu muito a pena começar esse projeto. Com certeza, trabalharei mais nele, adicionando mais e mais coisas para deixá-lo como portfolio. Além disso, serviu para comprovar, mais uma vez, que programar é o que amo fazer. Não há sensação parecida em ficar horas em frente à tela, teclando infinitamente e, depois de horas, conseguir solucionar os bugs e deixar a minha aplicação bonita e responsiva, da maneira que queria. É uma felicidade sem igual.

Enfim, é isso. Deixarei o link para produção aqui: https://desafio-neo-app.vercel.app/

## Videos referencia:

- https://www.youtube.com/watch?v=jo-IV8i5Gdk&t=516s video ensinando usar ContextAPI para carrinho de compras
- https://www.youtube.com/watch?v=2V9VK7xw6XE&t=134s video ensinando carrinho de compras com useState
- https://www.youtube.com/watch?v=v91BLoapVDw video ensinando criar paginas numeradas
- https://www.youtube.com/watch?v=WpnCjosdhGs&t=556s Este video me salvou em muitos requisitos, conectar com a API, como personalizar, como estilizar, criar paginas, ideia home. Este vídeo literalmente me salvou
- https://www.youtube.com/watch?v=Mp1NphMm7YU&t=1671s video ensinando usar styled components
- https://www.youtube.com/watch?v=83IMoIUoKTk video ensinando inserir dados da API na aplicação
- https://www.youtube.com/watch?v=jlqgqSFIKPU&t=1608s video ensinando conectar com API da Marvel
