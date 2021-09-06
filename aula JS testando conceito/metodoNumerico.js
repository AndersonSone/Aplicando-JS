console.log(parseFloat('12.999'));///ele volta 
console.log(Number.parseFloat('12.999'));///da para usa como numero

// parseInt
console.log(parseInt('10'));//volta normal
console.log(parseInt(16.96));//volya so a parte inteira
// toFixed
console.log(23.51515165.toFixed(1));//volta 1 casa decimal

// isNaN se for string volta true se nao volta false
console.log(isNaN("teste"));//true
console.log(isNaN(12));//false
console.log(isNaN("14"));//false

// MAX_VALUE e MIN_VALUE

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
///mostra o minimo e o maximo do number