const btnHamburguer = document.querySelector('#btnHamburguer')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburguer.addEventListener('click', handleChange)

function handleChange () {
  console.log('open hamburguer');
  if(header.classList.contains('open')) { // Close hamburguer menu
    header.classList.remove('open')
    fadeElems.forEach((element) => {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    }) 
  }
  else { // Open hamburguer menu
    header.classList.add('open')
    fadeElems.forEach((element) => {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    }) 
  }
}
