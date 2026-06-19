//Criar um ARRAY de objetos e pessoas tem que ser em colchete
const pessoas = []

//Pegando elementos do DOM
const formPessoa = document.querySelector('#form-pessoa')
const divPessoa = document.querySelector('#div-lista-pessoas')

//Capturando o evento do submit do formuláio
formPessoa.addEventListener('submit', (evt)=>{
    //Interrompendo o efeito padrão do formulário
    evt.preventDefault()

    //Criando o objeto data form
    const dadosForm = new FormData(formPessoa)

    //Criando e preenchendo o objeto literal pessoa. dentro da chave {}
    const pessoa = {
        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        renda: dadosForm.get('renda')
    }

    //Chamando a função addPessoa e passando o objeto literal pessoa
    addPessoa(pessoa)

    //Limpando o Formulário
    formPessoa.reset()



})

//Funções para CRUDE
//Função para Adicionar pessoa
const addPessoa = (objPessoa)=>{
    //Adicionando o objeto no array pessoas, vindo do parâmetro da função
    pessoas.push(objPessoa)

    listPessoa()
}

//Função listar pessoas
const listPessoa = () => {
    //Limpando a div
    divPessoa.innerHTML = ''

    //Percorrendo o Array com a estrutura de repetição forEach
    pessoas.forEach((elem, i)=>{
        divPessoa.innerHTML += `<div class='item-pessoa'> ${i + 1} - ${elem.nome}, ${elem.idade} anos, R$ ${parseFloat(elem.renda).toFixed(2).replace('.',',')} </div>`
    })
}