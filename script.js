// Active TAB
function initTabNav() {
  // Selecionar os itens
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo"); // Deixar sempre o primeiro item ativo

    // Função Callback - Recebe index como parâmetro. Sempre que ativar, remove a classe ativo de todos os outros elementos
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    // Adicionar o evento de click
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

// Accordion List on FAQ
initTabNav();

function initAccordion() {
  // Selecionar o dt do FAQ
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    // Verificar se existe item de lista
    // Deixar sempre o primeiro item ativo
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    // Função para adicionar o ativo ao clique
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

// Scroll suave
function initScrollSuave() {
  // Scroll
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    // Scroll suave utilizando a section
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Forma alternativa de scroll suave:
    // // Scroll suave utilizando window
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();
