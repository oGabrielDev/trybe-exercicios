// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
/*let factory = 1;

for (let i= 10; i > 0; i -= 1) {
  factory *= i;
}
console.log (factory);
*/

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
// let word = 'tryber';

// let word = 'tryber';
// let newWord = '';
// for (let i = word.length -1; i >= 0; i -= 1) {
//   newWord += word[i];
// }
// console.log(newWord);



// let word = 'trybe';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);


// 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = Math.max(...array);
console.log(maior);



// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
