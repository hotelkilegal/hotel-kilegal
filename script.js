const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');


// Abrir e fechar o menu no celular
menuBtn?.addEventListener('click', () => {

  const open = menu.classList.toggle('open');

  menuBtn.setAttribute(
    'aria-expanded',
    open
  );

});


// Fechar o menu depois de clicar em uma opção
document.querySelectorAll('.menu a').forEach(link => {

  link.addEventListener('click', () => {

    menu.classList.remove('open');

    menuBtn?.setAttribute(
      'aria-expanded',
      'false'
    );

  });

});
