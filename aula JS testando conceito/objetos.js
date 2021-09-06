/*let pessoa = {
  nome: "sone",
  idade: 22,
  falar: ()=> {///em vez de colocar function deve usar assim
    console.log("Olá, tudo bem?");
  },
  soma: (a, b)=> {///pode chamar funçao dentro do objeto
    return a + b;
  }
};

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.falar();

var soma = pessoa.soma(2, 2);

console.log(soma);
*/
let pessoa = {
  nome: "sone",
  idade: 22,
  falar: ()=> {
    console.log("Oi, tudo bem?");
  },
  dizerNome: ()=> {
    console.log("O meu nome é " + this.nome);   ///this ele chama o objeto be mais pratico
  },
  aniversario: ()=> {
    this.idade += 1;
  },
  saudacao: function() {
    return 'Sr. ' + this.nome;
  }
};
pessoa.dizerNome();//chama funçao atravez do objeto
console.log(pessoa.idade);

pessoa.aniversario();
console.log(pessoa.idade);

var sdc = pessoa.saudacao();//aqui atrbui uma variavel uma funçao
console.log("Olá " + sdc);