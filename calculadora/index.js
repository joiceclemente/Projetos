const teclasNum = [...document.querySelectorAll(".num")]
const teclasop = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const tcpy = document.getElementById("tcpy")
const tlimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")
const calc_aba =  document.getElementById("calc_aba")
const calc = document.getElementById("calc")
const img_aba_calc = document.getElementById("img_aba_calc")

let sinal = false 
let decimal = false

//para cada evento adicionar o elemento de click, qunado clicar adicionar no display
teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
    sinal = false
    if(evt.target.innerHTML == ",") { // para tirar o 0 do display
        if (!decimal) {
            decimal = true
            if (display.innerHTML=="0") {
                display.innerHTML="0," 
            } else {
                display.innerHTML+=evt.target.innerHTML
            }
        } 
    } else {
            if(display.innerHTML == "0") { // para tirar o 0 do display
                display.innerHTML="" 
            }
        display.innerHTML+=evt.target.innerHTML
            }
    })
})

teclasop.forEach((el) => {
    el.addEventListener("click", (evt) => {
        decimal = false
        if (!sinal) { // para não ter repetição de sinal seguidos
            sinal = true
            if(display.innerHTML == "0") { // para tirar o 0 do display
                display.innerHTML="" 
            }
            if(evt.target.innerHTML =="x") { // para trocar x por *
                display.innerHTML+="*"
            } else {
            display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML) // função eval realiza as contas 
    display.innerHTML = res
})

//para copiar o que está no display
tcpy.addEventListener("click", (evt) => {
    navigator.clipboard.writeText(display.innerHTML)
})

calc_aba.addEventListener("click", (evt) => {
    console.log(calc)
    calc.classList.toggle("calc_exibir")
    if(calc.classList.contains("calc_exibir")){
        img_aba_calc.setAttribute("src","esquerda.png")
    } else {
        img_aba_calc.setAttribute("src", "direita.png")
    }
})





