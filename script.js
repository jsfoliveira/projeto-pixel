

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


function pintarPixel (){
  // Pintar pixel com cor selecionada
  //Tive ajuda do meu colega Imar Mendes
  var pixel = document.getElementsByClassName('pixel');//acessei o que será pintado
  for (let i = 0; i < pixel.length; i += 1) {  //preciso percorrer todo o pixel-board
    pixel[i].addEventListener('click', pintar);
  } 
}
pintarPixel();
function pintar(event) {                     //getComputedStyle retorna valores da propriedade css. Vai aplicar o background do selected
  event.target.style.backgroundColor = getComputedStyle(
    document.querySelector('.selected')
  ).backgroundColor;
}

//Verifica se ao clicar no botão ("clear-board"), o quadro de pixels é totalmente preenchido de branco

let botao = document.getElementById('clear-board');
function btnpintarDeBranco() {
  var selected = document.querySelector('.selected');
  selected.classList.remove('selected');   //eu preciso remover o selected antes de pintar
  let limparPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < limparPixel.length; i += 1) {   //vou percorrer todo o pixel-board e pintar de branco
    limparPixel[i].style.backgroundColor = 'white';
  }
}
botao.addEventListener('click', btnpintarDeBranco);  //ao clicar no botao, vou ter um escutador que vai acionar a função de pintar de branco


//Verifica se nenhum valor for colocado no input ao clicar no botão, um `alert` é exibido com o texto: 'Board inválido!'failed

let btnVqv = document.getElementById('generate-board');
function digitarInput(event) {
  let input = document.getElementById('board-size');

  if (input.value == '') {
    alert('Board inválido!');
  }
}

btnVqv.addEventListener('click', digitarInput);

//Ao digitar no input um valor, a caixa de pixel seja limpada. Digitar um valor maior que 0 e até 10 no input, apertar no botao VQV e aumentar o número de coluna-pixel.


let caixaPixel = document.querySelector('#pixel-board');
let colunaPixel = document.querySelectorAll('.coluna-pixel');
let input = document.querySelector('#board-size');

function limparPixel (){
    //while(se esse argumento for verdadeiro){
    //     então faça isso
    // }
    while (caixaPixel.firstChild){
        caixaPixel.removeChild(caixaPixel.firstChild);
    //elementoPai.removeChild(elementoPai.firstCHild)
    }
}
input.addEventListener('keyup', limparPixel);

function criarCaixa (){
//primeiro limpa a caixa de pixel
    limparPixel ();
//valor é o valor digitado no input
    const valor = input.value;
//esse valor tem que ser maior que zero
  if (valor > 0){

    for (let coluna = 0; coluna < valor; coluna += 1){
        let colunaPixel = document.createElement('section');
        
        caixaPixel.appendChild(colunaPixel);
        colunaPixel.classList.add('coluna-pixel');
        for (let linha = 0; linha < valor; linha += 1){
          let pixel = document.createElement('button');
          colunaPixel.appendChild(pixel);
          pixel.classList.add('pixel');
        }
    }
    pintarPixel();
  }
}
btnVqv.addEventListener('click',criarCaixa);
