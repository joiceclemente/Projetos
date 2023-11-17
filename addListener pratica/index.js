const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const todosCursos = [...document.querySelectorAll(".curso")]
const btnV = document.querySelector("#btn_voltar")

todosCursos.map((el) => {
    el.addEventListener("click",(evt) => {
        const curso = evt.target
        curso.classList.toggle("selecionado") // o toggle se tem a classe "selecionado ele remove, se não tem ele adiciona"
    })   
})

btn.addEventListener("click", () => {
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    cursoSelecionado.map((el) => {
        caixa2.appendChild(el) // adiciona um filho que no caso é caixa2 ao btn
    })
})

btnV.addEventListener("click", () => {
    const retornar = [...document.querySelectorAll(".selecionado")]
    retornar.map((el) => {
        caixa1.appendChild(el)
    })
})



/*
Solucção do professor:

 MUDAR O BOTAO "COPIAR" PARA "TRANSFERIR" E CRIAR UMA NOVA CONST DE ELEMENTOS NÃO SELECIONADOS

btn.addEventListener("click", () => {
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    onst cursoSelecionado = [...document.querySelectorAll(".curso:not(.selecionado)")]
    cursoSelecionado.map((el) => {
        caixa2.appendChild(el) 
    })
    cursoNaoSelecionado.map((el) => {
        caixa1.appendChiels(el)
    })
})
*/



