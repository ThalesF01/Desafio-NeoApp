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
# Desafio front-end NeoApp
## Available Scripts
### `npm run build` fails to minify
