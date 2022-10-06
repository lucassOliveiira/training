//appendChild e removeChild
let div = document.getElementById('conteudo')

let p = document.createElement("p")
p.innerHTML = 'Olá Mundo!'

let img = document.createElement("img")
img.src = 'image/borjack.jpg'
img.style.width = '350px'

div.appendChild(p)
div.appendChild(img)

div.removeChild(img)