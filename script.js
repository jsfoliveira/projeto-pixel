window.onload = function () {
  console.log('carregou o dom');

  //Ao carregar, começar o selected na cor preta
  var primeiraCor = document.getElementsByClassName('color')[0];
  function primeiroPintarPreto(event) {
    event.target.classList.add('selected');
  }
  primeiraCor.addEventListener('click', primeiroPintarPreto);

  //Ao carregar, todo o pixel estar na cor branca
  function corBrancaInicial() {
    let pixel = document.querySelectorAll('.pixel');
    pixel.style.backgroundColor = 'white';
  }
  console.log(corBrancaInicial);
};

//Ao clicar no color, definir como classe selected
var primeiraCor = document.getElementsByClassName('color')[0];
var segundaCor = document.getElementsByClassName('color')[1];
var terceiraCor = document.getElementsByClassName('color')[2];
var quartaCor = document.getElementsByClassName('color')[3];

function definirClasseSelected(event) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected'); //add vai adicionar valores da classe específica definida no classList. Fonte: https://developer.mozilla.org/
}
primeiraCor.addEventListener('click', definirClasseSelected);
segundaCor.addEventListener('click', definirClasseSelected);
terceiraCor.addEventListener('click', definirClasseSelected);
quartaCor.addEventListener('click', definirClasseSelected);

//Clicar na paleta e pegar a cor

// Ao clicar no pixel, pintar com a cor selecionada

//SELECIONAR COR AO CLICAR NA PALETA

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
function btnpintarDeBranco() {
  for (let i = 0; i < 25; i += 1) {
    var pixel = document.querySelectorAll('.pixel');
    pixel[i].style.backgroundColor = 'white';
  }
}
botao.addEventListener('click', btnpintarDeBranco);

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
