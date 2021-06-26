export default function Modal(){

    const cancelButton = document.querySelector('.button.cancel')
    
    cancelButton.addEventListener('click', close)
    
    function open(){
        // Funcionalidade de atribuir a classe active para a modal
        document.querySelector('.modal-wrapper').classList.add('active')
    }
    function close(){
        // Funcionalidade de remover a classe active da modal
        document.querySelector('.modal-wrapper').classList.remove('active')
    }

    return{
        open,
        close
    
}
}