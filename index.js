let frutas = new Array('Abacaxi');

frutas.push('Banana');
frutas.push('maçã');
frutas.push('Morango');
frutas.unshift('Laranja')


console.log(frutas.length);

frutas.pop();
frutas.shift();
const frutaRemovida = frutas.splice(2, 1);
console.table(frutas);
console.log(frutaRemovida);