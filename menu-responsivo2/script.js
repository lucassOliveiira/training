const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav-list')

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    nav.classList.toggle('active')
})