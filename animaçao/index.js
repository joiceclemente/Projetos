const carro = document.getElementById("carro")
const btn_rodar = document.getElementById("btn_rodar")
const btn_parar = document.getElementById("btn_parar")

const init = () => {
    carro.style.position = "relative";
    carro.style.left = "0px";
    carro.style.width = "150px";
    carro.style.height ="80px"
    tamCarro = parseInt(carro.style.width);
    tamMax = window.innerWidth - tamCarro;
};

let anima = null
let tamMax = null
let tamCarro = null
let dir = 0

const move = () => {
        if(parseInt(carro.style.left) >= tamMax) {
            dir = -1
    } else if (parseInt(carro.style.left) <= 0) {
            dir = 1
    }
    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
    anima = setTimeout(move,20)
}

btn_parar.addEventListener("click", () => {
    clearTimeout(anima)
})

btn_rodar.addEventListener("click", () => {
    move()
})

window.addEventListener("load", init());
window.addEventListener("resize", () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})

window.addEventListener("keydown", (evt) => {
    if (evt.code === "ArrowUp"){
        carro.style.width = parseInt(carro.style.width) + 10+"px"
        carro.style.height = parseInt(carro.style.width) + 10+"px"
    } if (evt.code === "ArrowDown") {
        carro.style.width = parseInt(carro.style.width) - 10+"px"
        carro.style.height = parseInt(carro.style.width) - 10+"px"
    }
    tamCarro=parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
})



//nos botões as funções fazem a mesma coisa, foi apenas duas formas diferentes de escrever o mesmo código, não funcionou o primeiro código do btn_esquerda, por isso está comentado

// btn_esquerda.addEventListener("click", () => {
//     clearInterval(anima)
//     anima = setInterval(move, 20, -1)

    // carro.style.left = parseInt(carro.style.left) = 10 + "px"

    //let pos = parseInt(carro.style.left)
   // pos-=10
    //carro.style= `position:relative; left: ${pos}px`
// })

// btn_direita.addEventListener("click", () => {
//     clearInterval(anima)
//     anima = setInterval(move, 20, 1)

    // let pos = parseInt(carro.style.left)
    // pos+=10
    // carro.style= `position:relative; left: ${pos}px`
    
// })


// Outra forma de escrever o listener > window.onload = init
// window.addEventListener("load", init())
// window.addEventListener("resize", () => {
// tamMax = window.innerWidth - parseInt(carro.style.width)
// })





// Set interval, chama a funcão de tempos em tempos
// Set timeout, chama a função só uma vez



// OUTRA MANEIRA DE FAZER USANDO O TIMEOUT

// const init = () => {
//     carro.style = "position: relative; left: 0px"
// }

// let anima = null

// const move = (dir) => {
//     let pos = parseInt(carro.style.left)
//     pos += (10*dir)
//     carro.style= `position:relative; left: ${pos}px`
//      anima = setTimeout(movve,20,dir)
// }

// btn_parar.addEventListener("click", () => {
//     clearTimeout(anima)
// })



// //nos botões as funções fazem a mesma coisa, foi apenas duas formas diferentes de escrever o mesmo código, não funcionou o primeiro código do btn_esquerda, por isso está comentado

// btn_esquerda.addEventListener("click", () => {
//     clearTimeout(anima)
//     move(-1)

//     // carro.style.left = parseInt(carro.style.left) = 10 + "px"

//     //let pos = parseInt(carro.style.left)
//    // pos-=10
//     //carro.style= `position:relative; left: ${pos}px`
// })

// btn_direita.addEventListener("click", () => {
//     clearTimeout(anima)
//     move(1)

//     // let pos = parseInt(carro.style.left)
//     // pos+=10
//     // carro.style= `position:relative; left: ${pos}px`
    
// })


// window.onload = init