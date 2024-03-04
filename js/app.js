const menu = document.querySelector('#menu')
const headerMenu = document.querySelector('#header_menu')

menu.addEventListener('click',()=>{
    headerMenu.classList.toggle('block')
})
console.log(headerMenu);