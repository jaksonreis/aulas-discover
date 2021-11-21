 const openModalButton = document.getElementById('openModal')

 const modalWrapper = document.querySelector('.modal-wrapper')

 const textArticle = document.querySelector('.text')

 const elementBody = document.querySelector('body')

 openModalButton.onclick = function () {
    modalWrapper.classList.toggle('invisible')
    openModalButton.classList.toggle('invisible')
    elementBody.classList.add('bgGray')//adiciona
     
 }

 document.addEventListener('keydown', function(event) {
     const isEscKey = event.key === 'Escape'

     if (isEscKey) {
        modalWrapper.classList.toggle('invisible')
        openModalButton.classList.toggle('invisible')
        elementBody.classList.toggle('bgGray')//remove
     }
 })