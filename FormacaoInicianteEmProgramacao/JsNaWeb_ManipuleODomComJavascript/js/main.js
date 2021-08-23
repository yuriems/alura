import botaoConcluir from "./concluirTarefa.js"
import botaoDeletar from "./deletarTarefa.js"
    
const criarTarefa = (evento) => {
    evento.preventDefault()
    const list = document.querySelector("[data-list]")
    const input = document.querySelector("[data-form-input]")
    const valor = input.value
    const tarefa = document.createElement("li")
    tarefa.classList.add("task")
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(botaoConcluir())
    tarefa.appendChild(botaoDeletar())
    list.appendChild(tarefa)
    input.value = ""
}

const novaTarefa = document.querySelector("[data-form-button]")

novaTarefa.addEventListener("click", criarTarefa)