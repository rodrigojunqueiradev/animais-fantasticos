// const h1 = document.querySelector("h1");
// const animaisLista = document.querySelector(".animais-descricao");

// // h1.innerHTML = "<p>Novo Título</p>";

// // console.log(animaisLista.innerHTML);

// const lista = document.querySelector(".animais-lista");

// console.log(lista.children);

// const animais = document.querySelector(".animais");
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");

// // animais.appendChild(contato);

// const novoH1 = document.createElement("h1");
// novoH1.innerText = "Novo Título usando o método createElement";
// novoH1.classList.add("titulo");

// contato.appendChild(novoH1);

// const h1 = document.querySelector("h1");
// const faq = document.querySelector(".faq");

// const cloneH1 = h1.cloneNode(true);

// faq.appendChild(cloneH1);

// Exercícios:

// 1. Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// 2. Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");

console.log(primeiroDt);

// 3. Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);

// 4. Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
