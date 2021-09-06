// selecionar elemento
var title = document.querySelector(".title");

// innerHTML ele altera=> forma antiga
title.innerHTML = "Testando o texto alterado!";

// textContent -> mais utilizado, recomendando e performático
var subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "Testando o textContent";
///ele escreve conteudo no html