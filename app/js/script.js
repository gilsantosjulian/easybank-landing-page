const btnHamburguer = document.querySelector('#btnHamburguer')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburguer.addEventListener('click', handleChange)

function handleChange () {
  console.log('open hamburguer');
  if(header.classList.contains('open')) { // Close hamburguer menu
    body.classList.remove('noscroll')
    header.classList.remove('open')
    fadeElems.forEach((element) => {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    }) 
  }
  else { // Open hamburguer menu
    header.classList.add('open')
    body.classList.add('noscroll')
    fadeElems.forEach((element) => {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    }) 
  }
}
