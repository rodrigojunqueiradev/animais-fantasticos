// const listaAnimais = document.querySelector(".animais-lista");

// console.log(listaAnimais.clientHeight);
// console.log(listaAnimais.offsetHeight);
// console.log(listaAnimais.scrollHeight);

// console.log(listaAnimais.offsetTop);
// console.log(listaAnimais.offsetLeft);

// const primeiroH2 = document.querySelector("h2");
// const rect = primeiroH2.getBoundingClientRect();
// console.log(rect);

// console.log(
//   window.innerWidth,
//   window.outerWidth,
//   window.innerHeight,
//   window.outerHeight,
//   window.pageYOffset,
//   window.pageXOffset
// );

// if (window.innerWidth < 600) {
//   console.log("Tela menor que 600px");
// }

// const small = window.matchMedia("(max-width: 600px)");

// if (small.matches) {
//   console.log("Tela menor que 600px");
// } else {
//   console.log("Tela maior que 600px");
// }

//
//
// Exercícios

// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector("img");
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgs = document.querySelectorAll("img");
  let soma = 0;
  imgs.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui acessibilidade");
  } else {
    console.log(link, "Não possui boa acessilidade");
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia("(max-width: 720px)").matches;
if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
