//getElementById
let element = document.getElementById('blog-title')
console.log(element)

//getElementsByClassName()

element = document.getElementsByClassName('one')
console.log(element)

//getElementsByTagName()

element = document.getElementsByTagName('meta')
console.log(element)

//querySelector()

element = document.querySelector('meta')
console.log(element)

//querySelectorAll()

element = document.querySelectorAll('meta')
//element = document.querySelectorAll('#id')
//element = document.querySelectorAll('.class')
console.log(element)

/*    Qual usar
    getElementById     (element)
    getElementsByClassName()     (htmlCollection)
    getElementsByTagName()   (htmlCollection)
    querySelector()       (element)
    querySelectorAll()       (Nodelisr)

*/

//Manipulando dados

element = document.querySelector('h1')
element.textContent += " Olá Devs!"// concatenou outro valor
console.log(element.textContent)

let texto = document.querySelector('p')
texto.innerText += "  by: Motoboy Maluco"

let subtitle = document.querySelector('#blog-subtitle')
subtitle.innerHTML += "  - <small> Inicio </small>"//atribuiu codigo HTML

let box = document.querySelector('input')

console.log(box.value)//pegou o valor
box.value = "Jakson Louco"// atribuiu novo valor

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))

header.removeAttribute('id') //remove o atributo id

header.setAttribute('class', 'bg-header')


const elementBody = document.querySelector('body')
elementBody.style.backgroundColor = "#f9f3D2"
console.log(elementBody.style.backgroundColor)