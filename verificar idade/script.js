function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Full Year é para pegar os quatro digitos do ano
    var fano = document.getElementById('infoano') // para pegar a informação do ano que o usuaro colocou
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("ERRO! Verifique os dados e preencha novamente.")
    } else {
            var fsex = document.getElementsByName('radsex') // Usou o getElementsByName pois os dois inputs tem o mesmo nome
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id','foto') // aqui informa que o id=foto
            if (fsex[0].checked) { // fsex[0] significa masculino, na var fsex, no final não colocamos o [0] e [1], pois ele entra aqui
                genero = 'Homem'
                if (idade >=0 && idade < 10) {
                    //criança
                    img.setAttribute('src','baby boy.png')
                } else if (idade < 20) {
                    //jovem
                    img.setAttribute('src', 'menino.png')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'homem.png') 
                } else {
                    //idoso
                    img.setAttribute('src', 'idoso.png')
                }
            } else { // poderia colocar else if (fsex[1].checked), mas é redundante
                genero = 'Mulher'
                if (idade >=0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'baby girl.png')
                } else if (idade < 20) {
                    //jovem
                    img.setAttribute('src', 'menina.png')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src','mulher.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'idosa.png')
                }
            }
            res.style.textAlign = 'center' // centraliza a mensagem
            res.innerHTML = `De acordo com as informações, você é <strong>${genero}</strong> e tem <strong>${idade}</strong> anos!`
            res.appendChild(img) // é o que faz a imagem aparecer
        
        }

}