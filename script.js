const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

if (menuBtn && menu) {

menuBtn.addEventListener('click', () => {

```
const open = menu.classList.toggle('open');

menuBtn.setAttribute('aria-expanded', String(open));

menuBtn.setAttribute(
  'aria-label',
  open ? 'Fechar menu' : 'Abrir menu'
);
```

});

}

document.querySelectorAll('.menu a').forEach(link => {

link.addEventListener('click', () => {

```
if (menu) {
  menu.classList.remove('open');
}

if (menuBtn) {
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Abrir menu');
}
```

});

});
