# 	:woman_technologist: Project Pixels Art

Esse projeto contém uma série de informações sobre o que eu aprendi aqui na Trybe ao longo dos primeiros três blocos do curso de desenvolvimento web da Trybe. <br>Ele contém elementos posicionados e estilizados,além disto contém semântica apropriada para que seja acessível e melhor ranqueado.

## :rocket:Começando
Esse projeto foi proposto pelo curso de desenvolvimento web da Trybe.
### Desenvolvimento
Essa página foi feita usando HTML, CSS e JavaScript.
### Commits
Os commits foram feitos de acordo com os requisitos finalizados.
### Branch
Todo o projeto foi feita na branch 'juliana-oliveira-project-pixels-art', isso por conta da exigência do curso.
### Instalação
Antes de realizar o projeto, precisei instalar as dependências usando npm install.
### Visualização do projeto
O projeto poderá ser visualizado através da extensão do Visual Studio Code que permite criar um servidor HTTP para servir páginas HTML, chamada Live Server.
### Testes
Os testes usando foram ESLint e Cypress, através dos **comandos**: <br>
* npm run cypress:open <br>
* npm run lint:styles
### Autores
Esse foi um projeto individual,que desenvolvido somente por Juliana Oliveira.
### Ferramentas usadas
Foi usado Visual Studio Code, além do Trello que auxiliou na organização das tarefas.
### Framework usado
Nenhum.
### Informações importantes
Os arquivos que têm as resoluções dos requisitos são:
* index.html
* style.css
* script.js.

## :footprints:Requisitos
### Metodologia usada
No trabalho do desenvolvimento de software a gente sempre tem prazos, muitas vezes os prazos são apertados.<br>
Por outro lado, eu não quero criar algo que não entendo perfeitamente, como também fazer códigos rápidos pode levar a erros que podem demorar muito pra corrigir.<br>
Por isso, usei e sempre uso o método Baby Steps, que é uma estratégia de abordar o desafio passo à passo, defensivamente.<br>
Baby steps é um termo em inglês que quer dizer passos de bebê. Refere-se a fazer as coisas, quaisquer que sejam, devagar, com calma, passo a passo.
#### :footprints:Requisito 1
Adicione à página o título "Paleta de Cores".
* O título deverá ficar dentro de uma tag h1 com o id denominado title;
* O texto do título deve ser exatamente "Paleta de Cores".
#### :footprints:Requisito 2
Adicione à página uma paleta contendo quatro cores distintas.
* A paleta de cores deve ser um elemento com id denominado color-palette, ao passo que cada cor individual contida na paleta de cores deve possuir a classe color;
* A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. A única cor não permitida na paleta é a cor branca.;
* Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;
* A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";
* A paleta de cores não deve conter cores repetidas.
#### :footprints:Requisito 3
Adicione a cor preta como a primeira cor da paleta de cores.
#### :footprints:Requisito 4
Adicione à página um quadro de pixels, com 25 pixels.
* O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;
* O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;
* A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;
* O quadro de "pixels" deve aparecer abaixo da paleta de cores.
#### :footprints:Requisito 5
Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel.
#### :footprints:Requisito 6
Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
* O elemento da cor preta deve possuir, inicialmente, a classe selected;
* Note que o elemento que deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.
#### :footprints:Requisito 7
Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
* A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;
* Somente uma das cores da paleta deve ter a classe selected de cada vez;
* Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.
#### :footprints:Requisito 8
Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
#### :footprints:Requisito 9
Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.