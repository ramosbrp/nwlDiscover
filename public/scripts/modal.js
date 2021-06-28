export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    const modalRed = document.querySelector('.modal .red')
    
    cancelButton.addEventListener('click', close)
    
    function open(){
        // Funcionalidade de atribuir a classe active para a modal
        modalWrapper.classList.add('active')
    }
    function close(){
        // Funcionalidade de remover a classe active da modal
        modalWrapper.classList.remove('active')
    }

    function removeRed(){
        modalRed.classList.remove('red')
    }

    return{
        open,
        close
    
}
}