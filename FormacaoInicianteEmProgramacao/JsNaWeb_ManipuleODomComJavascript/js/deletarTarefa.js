const botaoDeletar = () => {
    const btnDeleta = document.createElement("button")
    btnDeleta.classList.add("delete-button")
    btnDeleta.innerHTML = "deletar"
    btnDeleta.addEventListener("click", deletarTarefa)
    return btnDeleta
}

const deletarTarefa = (evento) => {
    const btnDeleta = evento.target
    const tarefaCompleta = btnDeleta.parentElement
    tarefaCompleta.remove()
}

export default botaoDeletar