const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Java Script", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice = 0 //para definir o ID do elemento

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "curso C1")
    novoElemento.innerHTML = curso
    
    const comandos = document.createElement("div")
    comandos.setAttribute("class","comando")
    
    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")
    
    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)

    return novoElemento

}
cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

// para remover um curso selecionado

const radioSelecionado=() => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((el, ind, arr) => {
        return el.checked
    })
    return radioSelecionado[0]
}

btnRemoverCurso.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    if(rs!==undefined) {
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    } else {
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value !== "") {
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado)
    } else {
        alert("Digite o nome do curso")
    }
    }catch (ex) { 
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value !== "") {
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
    } else {
        alert("Digite o nome do curso")
    }
    }catch (ex) { 
        alert("Selecione um curso")
    }
})
