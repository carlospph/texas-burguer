const btn__menu = document.querySelector('.fa-bars');

const window__menu = document.querySelector('.window-menu')

btn__menu.addEventListener('click', ()=>{
  if(window__menu.classList.contains('show')){
    window__menu.classList.remove('show')
    btn__menu.setAttribute('class', 'fa-solid fa-xmark')
  }
  else{
    window__menu.classList.add('show')
    btn__menu.setAttribute('class', 'fa-solid fa-bars')
  }
})
