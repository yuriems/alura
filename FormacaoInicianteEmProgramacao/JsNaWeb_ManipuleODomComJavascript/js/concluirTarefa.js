const botaoConcluir = () => {
    const btnConcluir = document.createElement("button")
    btnConcluir.classList.add("check-button")
    btnConcluir.innerHTML = "concluir"
    btnConcluir.addEventListener("click", concluirTarefa)
    return btnConcluir
}

const concluirTarefa = (evento) => {
    const btnConcluir = evento.target
    const tarefaCompleta = btnConcluir.parentElement
    tarefaCompleta.classList.toggle("done")
}

export default botaoConcluir