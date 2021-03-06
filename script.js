const tijolo = document.querySelector('.produto');
const botaoMenu = document.querySelector('header div');
const menuFlutuante = document.querySelector('#navegacao nav');
const barraDePesquisa = document.querySelector('input');
function alertar(){
  alert("Digite a palavra premiada na pesquisa e ganhe desconto. DICA: nome do site");
}

function controlarMenu(){
  if(menuFlutuante.style.display === "flex"){
    menuFlutuante.style.display = "";
  }
  else{
    menuFlutuante.style.display = "flex";
  }
}

function pesquisa(event){
  if(event.key === "Enter"){
    alert("Ainda não funciona a pesquisa, volte outro dia (: ");
    barraDePesquisa.value = "";
  }
}

function pintarDeLaranja(){
  barraDePesquisa.style.backgroundColor = "orange";
}

function limparFundo(){
  barraDePesquisa.style.backgroundColor = "";
  if(barraDePesquisa.value.search('tijolo') !== -1){
    alert("PARABENS VOCÊ GANHOU 10% DE DESCONTO NA SUA PRIMEIRA COMPRA");
  }
}

botaoMenu.onclick = controlarMenu;
tijolo.onclick = alertar;
barraDePesquisa.onkeypress = pesquisa;
barraDePesquisa.onkeydown = pintarDeLaranja;
barraDePesquisa.onkeyup = limparFundo;