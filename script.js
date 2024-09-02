const img = document.querySelector("img");
function callback(event) {
  console.log(event);
}

img.addEventListener("click", callback);

const animaisLista = document.querySelector(".animais-lista");
function callbackLista(event) {
  console.log(event.currentTarget); // this
  console.log(event.target); // onde o clique ocorreu
  console.log(event.type); // tipo de evento
}

animaisLista.addEventListener("click", callbackLista);

console.log(animaisLista);

const linkExterno = document.querySelector('a[href^="http"]');
function handleLinkExterno(event) {
  event.preventDefault;
  console.log(this);
}

linkExterno.addEventListener("click", handleLinkExterno);

//Parei em Diferentes Eventos
