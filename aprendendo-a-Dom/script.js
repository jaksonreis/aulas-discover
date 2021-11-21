
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
element.textContent += " Olá Devs!"// concatenou mais um valor
console.log(element.textContent)

let texto = document.querySelector('p')
texto.innerText += "  by: Motoboy Maluco"

let subtitle = document.querySelector('#blog-subtitle')
subtitle.innerHTML += "  - <small> Inicio </small>"//atribuiu codigo HTML

let box = document.querySelector('input')

console.log(box.value)//pegou o valor
box.value = "Jakson"// atribuiu novo valor

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))

header.removeAttribute('id') //remove o atributo id

header.setAttribute('class', 'bg-header')


const elementBody = document.querySelector('body')
//elementBody.style.backgroundColor = "#f9f3D2"//aplicando estilo css
console.log(elementBody.style.backgroundColor)// mostrando no console

elementBody.classList.add('green')//adiciona
console.log(elementBody.classList)

elementBody.classList.remove('green')//remove
console.log(elementBody.classList)

elementBody.classList.toggle('green')//e existir, tira e se nao existir ele coloca

console.log(elementBody.parentNode)//pega o elemento pai


console.log(elementBody.childNodes)//pega os elementos filhos

console.log(elementBody.children)//pega os elementos filhos HTML Collection

console.log(elementBody.firstChild)//pega o elementos filho primeiro

console.log(elementBody.childNodes)//pega s elementos filhos ultimo

console.log(header.nextSibling)//pega proximo irmao, considera o text e qualquer um

console.log(header.nextElementSibling) //pega apenas elementos proximo irmaos

let scripter = document.querySelector('body script')


console.log(scripter.previousElementSibling) // pega apenas elementos anterior irmaos


/// Criando elementos

const div = document.createElement('div')// cria o elemento
div.innerText = "Muita atenção"// adiciona um texto interno

const div2 = document.createElement('div')// cria o elemento
div2.innerText = "Obrigado"// adiciona um texto interno

const div3 = document.createElement('div')// cria o elemento
div3.innerText = "Div do meio"// adiciona um texto interno

elementBody.append(div2)//adiciona elemento ultimo

elementBody.prepend(div)// adiciona elemento primeiro

elementBody.insertBefore(div3, texto)// adiciona elemento antes de outro elemento

function show() {
    box.value = "Ana, A Mamãe Lindona"
    
}

//subtitle.addEventListener('click', show)//acionando evento por Js (empinha e executa todas funcionalidades)

subtitle.onclick = show  //executa apenas a ultima se tiver varias funcionalidades com mesmo nome

let button = document.querySelector('legend')

button.onclick = function keyboard() {
    texto.innerText = box.value
}//Acionando evento de teclado

//Argumento evento
box.onkeydown = function evento(event) {
    console.log(event)//consigo puxar diversos valores colocando o .
}