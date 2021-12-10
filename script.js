// 6.  Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels. O elemento da cor preta deve possuir, inicialmente, a classe selected;

window.onload = function corInicial() {
  let corPreta = document.getElementsByClassName('color')[0];
  corPreta.classList.add('selected');
};

// 7. Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

//acessa o color da paleta
//cria array pra percorrer cada color da paleta
//em cada color vou fazer um addEventListener para escutar o evento click e acionar a função pegar a cor
//vou remover da lista a classe selected
//vou pegar uma variável que vai ler o texto que está em cada .color e transformar em cor

let color = document.querySelector('.color');
color.addEventListener('click', function pegarCor(event) {
  color.classList.remove('selected');
  let cor = event.target.innerText;
  return cor;
});

// let paleta = document.querySelector('#color-palette');
// for (i = 0; i < paleta.length; i += 1) {
//   paleta[i].addEventListener('click', function pegarCor(event) {
//     paleta[i].classList.remove('selected');
//     let cor = event.target.innerText;
//     paleta[i].style.backgroundColor = cor; //falta adicionar a cor
//   });
// }
// 8. Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

// let pixel = document.querySelectorAll('.pixel');
// pixel.addEventListener('click', function mudarCor(event) {
//   pixel.style.backgroundColor = cor;
// });

//9. Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco
let botao = document.getElementById('clear-board');
botao.addEventListener('click', function () {
  let colunaDePixel = document.getElementById('pixel-board');
  colunaDePixel.style.backgroundColor = 'white';
});
