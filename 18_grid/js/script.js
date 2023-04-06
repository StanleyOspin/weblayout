document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("shift__menu").addEventListener("click", function()
  {
    document.querySelector(".header").classList.toggle("open")
  })
})

let burger = document.querySelector('.burger');
burger.addEventListener('click', () => {

  let n = 'true' === burger.getAttribute('aria-expanded');
  burger.setAttribute('aria-expanded', !n),
    n
      ? burger.setAttribute('aria-label', 'Открыть навигацию')
      : burger.setAttribute('aria-label', 'Закрыть навигацию');
})
