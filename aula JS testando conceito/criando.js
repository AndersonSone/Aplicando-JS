var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão'];//listinha da aula

var listaUl = document.createElement('ul'); //cria uma ul

var body = document.getElementsByTagName('body'); //puxa o corpo da html

body[0].appendChild(listaUl);//cria uma lista dentr do body esse 0 é oq sai no especionar elemento
var listaNoBody = document.getElementsByTagName('ul');
console.log(listaNoBody[0]);
for(var i in lista) {

  var liFor = document.createElement('li');

  var textoLi = document.createTextNode(lista[i]);

  liFor.appendChild(textoLi);

  listaNoBody[0].appendChild(liFor);

}