  const toggleBtn = document.getElementById('menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const linkNav = [...document.querySelectorAll('.link-nav')];
  const hmc = document.querySelector('.header-main .container')
  const ht = document.querySelector('.header-top')

  //Menu Toogle
  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    mainNav.classList.toggle('open');
    hmc.classList.toggle('active');
    if( ht.style.display == 'none'){
      social_links.style.display = 'flex';
    }else {
      ht.style.display = 'none';
    }
    console.log("ativo");
  });

  //Menu links nav
  linkNav.map((el)=>{
    el.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      mainNav.classList.toggle('open');
      hmc.classList.toggle('active');
      if( htc.style.display == 'none'){
        htc.style.display = 'flex';
      }else {
        htc.style.display = 'none';
      }
      console.log("ativo");
      });
  })

  

 
  //Scroll esconde menu
  let previousScrollY = window.scrollY; // Armazena a posição inicial do scroll
  window.addEventListener('scroll', () => {
    let scrollXPosition = window.scrollY;
    const triggerPoint = 100; // Defina o valor de rolagem horizontal (em pixels) para acionar a ação
    const triggerPoint2 = 50;
    console.log(scrollXPosition)
    
  
    if (scrollXPosition > triggerPoint || scrollXPosition > 0) {
      // A ação que você quer executar quando a rolagem horizontal ultrapassar 500 pixels
      console.log(`Rolagem horizontal atingiu ou ultrapassou ${triggerPoint}px.`);
  
      // Exemplo: Adicionar uma classe a um elemento
      const meuElemento = document.querySelector('.header-top');
      const meuElemento2 = document.querySelector('.header-bottom');
      meuElemento.style.display = 'none';
      meuElemento2.style.display = 'none';
    
  
      // Você pode remover o event listener se a ação só precisa acontecer uma vez
      // window.removeEventListener('scroll', this);
    }else{
      const meuElemento = document.querySelector('.header-top');
      const meuElemento2 = document.querySelector('.header-bottom');
      meuElemento.style.display = 'flex';
      meuElemento2.style.display = 'flex';
    }
    function subir_recolocar(){
      
    }
    /* if (scrollXPosition < previousScrollY || previousScrollY - scrollXPosition > 40) {
      // O scroll subiu (a posição atual é menor que a anterior)
      console.log("Scroll para cima!");
      const meuElemento = document.querySelector('.header-top');
      const meuElemento2 = document.querySelector('.header-bottom');
      meuElemento.style.display = 'flex';
      meuElemento2.style.display = 'flex';
      // Aqui você pode executar a sua ação quando o scroll sobe

    } */

    console.log(scrollXPosition -  previousScrollY)



   // Atualiza a posição anterior para a próxima comparação
   previousScrollY = scrollXPosition;
  });


