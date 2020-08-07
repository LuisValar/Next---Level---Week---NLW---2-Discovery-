// Procurar o botão 
document.querySelector("add-time")
// Quando clicar no botão
addEventListener('click', cloneField)


// Executar uma ação
function cloneField(){
    // aqui dentro da function excuto as ações

    // Duplicar os campos
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean

    //pegar os campos
    const fields = newFieldsContainer.querySelectorAll('input')
    
    //para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa
        field.value=""
    })

    
    //colocar napagina
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
    
