//ERRO: não funciona
//Ao carregar, deve começar o selected na cor preta
// window.onload = function () {
//   var pixelInicial = document.querySelectorAll('.pixel');
//   function pintarPreto() {
//     for (let i = 0; i < pixelInicial.length; i += 1) {
//       if (pixelInicial[i].style.backgroundColor === 'white') {
//         pixelInicial[i].style.backgroundColor === 'black';
//       }
//     }
//   }

//   pixelInicial[i].addEventListener('click', pintarPreto);

//   pintarPreto();
// };

//   //ao carregar, ativar a função ()
//   var pixel = document.getElementsByClassName('pixel');
//   function pintarPixelPreto(event) {
//     let selected = document.querySelector('.selected');

//     var primeiraCor = document.getElementsByClassName('color')[0];
//     if (primeiraCor) {
//       return event.target.classList.add('selected');
//     }
//   }
//   pixel.addEventListener('click', pintarPixelPreto);
// };
//CORRETO
//Ao clicar no color, definir como classe selected
var primeiraCor = document.getElementsByClassName('color')[0];
var segundaCor = document.getElementsByClassName('color')[1];
var terceiraCor = document.getElementsByClassName('color')[2];
var quartaCor = document.getElementsByClassName('color')[3];

function definirClasseSelected(event) {
  let selected = document.querySelector('.selected'); //onde o selected pertence inicialmente
  selected.classList.remove('selected'); //precisa remover de um pra add em outro
  event.target.classList.add('selected'); //add vai adicionar valores da classe específica definida no classList. Fonte: https://developer.mozilla.org/
}
//Ao clicar em cada color, vai definir como a classe selected
primeiraCor.addEventListener('click', definirClasseSelected);
segundaCor.addEventListener('click', definirClasseSelected);
terceiraCor.addEventListener('click', definirClasseSelected);
quartaCor.addEventListener('click', definirClasseSelected);

//ERRO: não funciona
// Pintar pixel com cor selecionada
// function pintarPixel(event) {
var pixel = document.getElementsByClassName('pixel');
for (let i = 0; i < pixel.length; i += 1) {
  // event.target.style.backgroundColor = 'color';
  pixel[i].addEventListener('click', pintar);
}
// }
// pintarPixel();

function pintar(event) {
  event.target.style.backgroundColor = getComputedStyle(
    document.querySelector('.selected')
  ).backgroundColor;
  
}

//ERRO: Pinta tudo, mas está dando erro no teste
//9. Verifica se ao clicar no botão ("clear-board"), o quadro de pixels é totalmente preenchido de branco

let botao = document.getElementById('clear-board');
function btnpintarDeBranco() {
  var selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  let limparPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < limparPixel.length; i += 1) {
    limparPixel[i].style.backgroundColor = 'white';
  }
}
botao.addEventListener('click', btnpintarDeBranco);

//CORRETO
//Verifica se nenhum valor for colocado no input ao clicar no botão, um `alert` é exibido com o texto: 'Board inválido!'failed

let btnVqv = document.getElementById('generate-board');
function digitarInput(event) {
  let input = document.getElementById('board-size');
  let conteudoInput = event.target;

  if (conteudoInput.value == '') {
    alert('Board inválido!');
  }
}

btnVqv.addEventListener('click', digitarInput);
