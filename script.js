window.onload = function () {
  //COR INICIAL PRETA AO CARREGAR A PÁGINA
  function corInicial() {
    let corPreta = document.querySelectorAll('.color')[0];
    corPreta.classList.add('selected');
  }
  //SELECIONAR COR AO CLICAR NA PALETA
};

// let color = document.querySelectorAll('.color');
// color.addEventListener('click', function pegarCor(event) {
//   let selected = document.querySelector('.selected');
//   selected.classList.remove('selected');
//   let cor = event.target.innerText;
//   return cor;
// });

// 8. Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

// let pixel = document.querySelector('.pixel');
// pixel.addEventListener('click', function mudarCor(event) {
//   pixel.style.backgroundColor = cor;
// });

//9. Verifica se ao clicar no botão ("clear-board"), o quadro de pixels é totalmente preenchido de branco
let botao = document.getElementById('clear-board');
function pintarDeBranco() {
  for (let i = 0; i < 25; i += 1) {
    let pixel = document.querySelectorAll('.pixel');
    pixel[i].style.backgroundColor = 'white';
  }
}
botao.addEventListener('click', pintarDeBranco);

//Verifica se nenhum valor for colocado no input ao clicar no botão, um `alert` é exibido com o texto: 'Board inválido!'failed

//CORRETO

let btnVqv = document.getElementById('generate-board');
function digitarInput(event) {
  let input = document.getElementById('board-size');
  let conteudoInput = event.target;

  if (conteudoInput.value == '') {
    alert('Board inválido!');
  }
}

btnVqv.addEventListener('click', digitarInput);
