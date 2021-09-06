// length
var arr = [1,2,3,4,5];
console.log(arr.length);//quantos ele,mrtos tem

// push para adciona na ultima casa
arr.push(6);
arr.push('Qualquer coisa');
console.log(arr);

// pop para remover ultima casa
arr.pop();
console.log(arr);

// unshift parra coloca no inicio
arr.unshift(0);
arr.unshift('teste');
console.log(arr);

// shift para remove primeiro
arr.shift();
console.log(arr);

// acessar o último elemento
console.log(arr[arr.length - 1]);

// isArray
console.log(Array.isArray(5));
console.log(Array.isArray(arr));


///splice(posicao,quantos quer exclui,oq quer adciona) 
arr.splice(2, 0, 999);
console.log(arr);
arr.splice(4, 1);
console.log(arr);

// indexOf fala qual elemento esta na casa
console.log(arr.indexOf(5));

// join arrays em string separado nesse caso por virgula
var arr2 = ["O", "rato", "roeu", "a", "roupa"];
console.log(arr2.join(","));
 
// reverse
console.log(arr2.reverse());