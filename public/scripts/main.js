import  Modal  from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription  = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


// Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    // Adicionar a escuta
    button.addEventListener("click", handleClick)
})

// Pegar o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button =>{
    
    button.addEventListener("click", (event) => handleClick(event, false))
    
})

function handleClick(event, check = true){

    const text = check ? 'Marcar como lida' : 'Excluir'

    // Altera o h2 da moda, para marcar como lida ou excluir pergunta
    modalTitle.innerHTML = `${text} esta pergunta`
    
    // Altera o p da modal, pergunta se quer marcar como lida ou excluir
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
    
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()} esta pergunta?`


    removeRed()

    // Abrir modal
    modal.open()
}


