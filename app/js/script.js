const btnHamburguer = document.querySelector('#btnHamburguer')

btnHamburguer.addEventListener('click', handleChange)

function handleChange () {
  console.log('open hamburguer');
  if(btnHamburguer.classList.contains('open'))
    btnHamburguer.classList.remove('open')
  else 
    btnHamburguer.classList.add('open')
}
