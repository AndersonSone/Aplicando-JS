// removendo elemento filho
var container = document.querySelector("#container");//ele pega o container
var p = document.querySelectorAll("#container > p ");///pega o p do container
console.log(p[1]);
container.removeChild(p[1]);///assim ele remove so onde preciso

// remover o elemento
var subtitle = document.querySelector(".subtitle");
subtitle.remove();