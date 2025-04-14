document.addEventListener('DOMContentLoaded', function () {
  const BurgerCheckbox = document.getElementById('burger__checkbox');
  const MenuList = document.querySelector('.menu__list');

  function updateMenuDisplay() {
    const isMobile = window.innerWidth <= 1000;

    if (BurgerCheckbox.checked && isMobile) {
      MenuList.style.display = 'grid';
    } else {
      MenuList.style.display = 'none';
      BurgerCheckbox.checked = false; 
      // снимаем галочку, чтобы не оставалась активной
    }
  }

  // Показываем/скрываем меню при клике на чекбокс
  BurgerCheckbox.addEventListener('change', updateMenuDisplay);

  // Следим за изменением ширины окна
  window.addEventListener('resize', updateMenuDisplay);
});