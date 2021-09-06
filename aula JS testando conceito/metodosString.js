// length
var nome = "Matheus";
console.log(nome.length);//conta os numero de caracteres inclusive espaço

// indexOf
console.log(nome[2]);//mostra que tem no 3 espaço
var frase = "O rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("roeu"));//mostra onde começa a r do roeu

// slice
var roeu = frase.slice(7, 11);
console.log(roeu);//ele mostra oq tem no espaço 7 a 11

// replace
var novaFrase = frase.replace("roeu", "teste");
console.log(novaFrase);
///ele troca roeu por replace

// toLowerCase e toUpperCase td minuscula e td maiscula

var frase = "Esta é a frase que vamos manipular";
var fraseCaixaAlta = frase.toUpperCase();
console.log(fraseCaixaAlta);
console.log(fraseCaixaAlta.toLowerCase());

// trim tira espaços 
var nome = "        Matheus     ";
var nomeTrim = nome.trim();
console.log(nome);
console.log(nomeTrim);

// split separa por espaço ou virgula e taca numa string
console.log(frase.split(" "));
var tags = "PHP, JavaScript ,HTML, CSS";
console.log(tags.split(", "));

// lastIndexOf
var fraseDois = "Eu quero a última palavra teste desta frase de teste";
console.log(fraseDois.indexOf("teste"));//acha o primeiro teste
console.log(fraseDois.lastIndexOf("teste"));//acha o ultimmo teste