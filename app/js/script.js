const btnHamburguer = document.querySelector('#btnHamburguer')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')

btnHamburguer.addEventListener('click', handleChange)

function handleChange () {
  console.log('open hamburguer');
  if(header.classList.contains('open')) { // Close hamburguer menu
    header.classList.remove('open')
    overlay.classList.remove('fade-in')
    overlay.classList.add('fade-out')
  }
  else { // Open hamburguer menu
    header.classList.add('open')
    overlay.classList.remove('fade-out')
    overlay.classList.add('fade-in')
  }
}
