const btnHamburguer = document.querySelector('#btnHamburguer')
const header = document.querySelector('.header')

btnHamburguer.addEventListener('click', handleChange)

function handleChange () {
  console.log('open hamburguer');
  if(header.classList.contains('open'))
    header.classList.remove('open')
  else 
    header.classList.add('open')
}
