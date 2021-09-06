// tag
var titulo = document.getElementsByTagName('h1')[0];//puxxa o h1 pelo nome
console.log(titulo);

var lis = document.getElementsByTagName('li');//puxa pelo nome
console.log(lis);

// id
var paragrafo = document.getElementById('paragrafo');//puxa pelo id
console.log(paragrafo);

// class
var itensDaLista = document.getElementsByClassName('item');//puxa pela classe
console.log(itensDaLista);


// hj em dia usa mais o querySelector
var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

// querySelectorAll
var itensQuery = document.querySelectorAll('#lista2 > li');
console.log(itensQuery);
console.log(itensQuery[1]);

var itensQuery2 = document.querySelectorAll('#lista .item');
console.log(itensQuery2);

// querySelector
var lista = document.querySelector('#lista');
console.log(lista);

var primeiraLista = document.querySelector('ul');
console.log(primeiraLista);

var span = document.querySelector('#paragrafo span');
console.log(span);