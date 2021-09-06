// inserir o elemento no body
var novoParagrafo = document.createElement("p");//cria  paragrafo

var texto = document.createTextNode("Este é o conteúdo do paragráfo");
//usa esse para inserir quando foi criaado
novoParagrafo.appendChild(texto);
//tem que adciona assim o teto nele
console.log(novoParagrafo);

var body = document.querySelector("body");
console.log(body);
body.appendChild(novoParagrafo);
///coloca dentro do body o paragrafo
// inserir em um container

var container = document.getElementById("container");
console.log(container);
var el = document.createElement("span");
el.appendChild(document.createTextNode("texto do span"));
console.log(el);
container.appendChild(el);