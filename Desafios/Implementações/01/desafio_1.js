//Resolução utilizando prompt, alert e salvando os dados no console <Dev> (Semana 1)
// After: utilizar o js para manipular o html

// 1. Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
let nome = prompt("Qual é o seu nome?");
alert(`Seu nome é: ${nome}`);   //Template Strings: alert (`) + $
console.log(nome);

// 2. Crie duas variáveis: uma chamada idade e outra chamada altura. Atribua valores e exiba ambos.
let idade = prompt("Qual é a sua idade?");
let altura = prompt("Qual é a sua altura (em metros)?");
alert(`Idade: ${idade}, Altura: ${altura}` + 'metros');
console.log(`Idade: ${idade}, Altura: ${altura}` + 'metros');

// 3. Calcule o preço com desconto e exiba o valor final.
let preco = prompt("Qual o preço do produto?");
let desconto = prompt("Qual será o desconto aplicado?");
let precoFinal = preco - (preco * desconto);
alert(`Preço original: R$${preco} \nDesconto: R$${desconto} \nPreço final: R$${precoFinal}`);
console.log(precoFinal);

// 4. Exiba mensagem baseada na temperatura.
let temperatura = prompt("Digite a temperatura atual:");
if (temperatura > 25) {
  alert("Está calor!");
} else {
  alert("Está fresco!");
}
console.log(temperatura > 25 ? "Está calor!" : "Está fresco!");

// 5. Verifique se a pessoa é maior de idade.
let idade2 = prompt("Digite sua idade:");
if (idade2 >= 18) {
  alert("Você é maior de idade");
} else {
  alert("Você é menor de idade");
}
console.log(idade2 >= 18 ? "Maior de idade" : "Menor de idade");

// 6. Exiba aprovação, recuperação ou reprovação.
let nota = prompt("Digite sua nota (0 a 10):");
if (nota >= 7) {
  alert("Aprovado");
} else if (nota >= 5) {
  alert("Recuperação");
} else {
  alert("Reprovado");
}
console.log(nota >= 7 ? "Aprovado" : nota >= 5 ? "Recuperação" : "Reprovado");

// 7. Verifique se dois números são iguais ou diferentes.
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");
if (numero1 === numero2) {
  alert("Os números são iguais");
} else {
  alert("Os números são diferentes");
}
console.log(numero1 === numero2 ? "Iguais" : "Diferentes");

// 8. Exiba nome e idade concatenados.
let meuNome = prompt("Qual é o seu nome?");
let minhaIdade = prompt("Qual é a sua idade?");
alert(`Olá, meu nome é ${meuNome} e eu tenho ${minhaIdade} anos`);
console.log(`Olá, meu nome é ${meuNome} e eu tenho ${minhaIdade} anos`);

// 9. Imprima os números de 1 a 10.
alert("Veja os números de 1 a 10 no console:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 10. Peça para o usuário digitar um número até que seja 5.
let numero;
do {
  numero = prompt("Digite um número (digite 5 para sair):");
} while (numero != 5);
alert("Você digitou o número 5!");

// 11. Imprima a tabuada do número 7.
alert("Veja a tabuada do número 7 no console:");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// 12. Exiba todos os números pares de 0 a 20.
alert("Veja todos os números pares de 0 a 20 no console:");
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 13. Calcule a área de um círculo com função.
function calcularAreaCirculo(raio) {
  return Math.PI * Math.pow(raio, 2);
}
let raio = prompt("Digite o raio do círculo:");
let area = calcularAreaCirculo(raio);
alert(`A área do círculo com raio ${raio} é: ${area.toFixed(2)}`); //arredondar
console.log(area);

// 14. Some dois números e exiba o resultado.
let num1 = parseFloat(prompt("Digite o primeiro número para somar:"));
let num2 = parseFloat(prompt("Digite o segundo número para somar:"));
alert(`A soma dos números é: ${num1 + num2}`);
console.log(num1 + num2);

// 15. Refatore o código com funções.
function somar(a, b) {
  return a + b;
}
let x = parseFloat(prompt("Digite o primeiro número:"));
let y = parseFloat(prompt("Digite o segundo número:"));
alert(`A soma é: ${somar(x, y)}`);
console.log(somar(x, y));
