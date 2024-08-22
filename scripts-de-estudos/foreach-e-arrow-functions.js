const imgs = document.querySelectorAll("img");

// imgs.forEach(function (item) {
//   console.log(item);
// });

// Estudo dos parâmetros do forEach

// imgs.forEach(function (valorAtual, index, array) {
//   console.log(valorAtual);
//   console.log(index);
//   console.log(array);
// });

// imgs.forEach(function (valorAtual, index, array) {
//   console.log(valorAtual, index, array);
// });

// const titulos = document.getElementsByClassName("titulo");
// const titulosArray = Array.from(titulos);
// titulosArray.forEach(function (item) {
//   console.log(item);
// });

// Arrow Functions =>

// imgs.forEach((item) => {
//   console.log(item);
// });

// imgs.forEach((item) => console.log(item));

//
// Exercícios:
//

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");

// paragrafos.forEach((item) => {
//   console.log(item);
// });

// Mostre o texto dos parágrafos no console
// paragrafos.forEach((item) => {
//   console.log(item.innerText);
// });

// Como corrigir os erros abaixo:

// imgs.forEach(item, index => {
//     console.log(item, index);
//   });

//   let i = 0;
//   imgs.forEach( => {
//     console.log(i++);
//   });

//   imgs.forEach(() => i++);

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
