// sobre.js

document.addEventListener("DOMContentLoaded", function () {
  const elementos = document.querySelectorAll("#sobre .fade-in");

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("aparecendo");
      } else {
        entrada.target.classList.remove("aparecendo");
      }
    });
  }, {
    threshold: 0.5 // 50% do elemento visível já ativa o efeito
  });

  elementos.forEach((el) => observer.observe(el));
});
