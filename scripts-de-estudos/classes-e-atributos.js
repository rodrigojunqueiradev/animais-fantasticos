// const menu = document.querySelector(".menu");

// console.log(menu.className);
// console.log(menu.classList);

// menu.classList.add("ativo");
// console.log(menu.classList);

// menu.classList.add("ativo", "mobile");
// console.log(menu.classList);

// menu.classList.remove("ativo");
// console.log(menu.classList);

// menu.classList.toggle("ativo");
// console.log(menu.classList);
// console.log(menu.classList.contains("ativo"));

// menu.classList.toggle("ativo");
// console.log(menu.classList);
// console.log(menu.classList.contains("ativo"));

// menu.classList.replace("mobile", "celular");
// console.log(menu.classList);

// menu.classList.remove("celular");
// console.log(menu.classList);

// const animais = document.querySelector(".animais");
// console.log(animais.attributes);
// console.log(animais.attributes[0]);
// console.log(animais.attributes[1]);
// console.log(animais.attributes[2]);

// const img = document.querySelector("img");
// console.log(img.getAttribute("src"));
// img.setAttribute("alt", "É uma raposa");
// console.log(img.getAttribute("alt"));
// console.log(img.hasAttribute("id"));
// img.removeAttribute("alt");
// console.log(img.getAttribute("alt"));

// Exercícios

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
console.log(itensMenu);

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});
console.log(itensMenu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
console.log(itensMenu);

itensMenu[0].classList.add("ativo");
console.log(itensMenu);

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "https://google.com");
