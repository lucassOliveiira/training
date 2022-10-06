const menu = document.getElementById('menu')
const nav = document.getElementById('nav-list')

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    nav.classList.toggle('active')
})