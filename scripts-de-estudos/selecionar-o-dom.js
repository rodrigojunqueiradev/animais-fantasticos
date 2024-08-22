// Seleciona pelo ID
// const animaisSection = document.getElementById("animais");
// const contatoSection = document.getElementById("contato");

// console.log(animaisSection);
// console.log(contatoSection);

// Retorna null caso não exista
// const naoExiste = document.getElementById("teste");
// console.log(naoExiste);

// Seleciona pela classe, retorna uma HTMLCollection
// const gridSection = document.getElementsByClassName("grid-section");
// console.log(gridSection);
// const contato = document.getElementsByClassName("grid-section contato");
// console.log(contato);

// Seleciona todas as UL's, retorna uma HTMLCollection
// const ul = document.getElementsByTagName("ul");
// console.log(ul);

// Seletor geral único
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
// const animais = document.querySelector(".animais");
// const contato = document.querySelector("#contato");
// const ultimoItem = document.querySelector(".animais-lista li:last-child");
// const linkCSS = document.querySelector('[href^="https://"]');
// const primeiroUl = document.querySelector("ul");
// const navItem = primeiroUl.querySelector("li");

// Seletor geral lista
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
// const fotosAnimais = document.querySelectorAll(".animais-lista img");
// const listas = document.querySelectorAll("ul");
// const titulos = document.querySelectorAll(".titulo");
// console.log(fotosAnimais[1]);

// Exercícios:
// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
console.log(imagens);
// imagens.forEach(function (fotos) {
//   console.log(fotos);
// });

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector(".animais-descricao h2");
console.log(h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);
console.log(paragrafos.length);
const ultimoP = paragrafos[paragrafos.length - 1];
console.log(ultimoP);
