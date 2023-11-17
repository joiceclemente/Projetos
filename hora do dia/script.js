function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = zeroAEsquerda(data.getHours())
    var min = zeroAEsquerda(data.getMinutes())
    msg.innerHTML = `Agora são ${hora}:${min} horas. `
    if (hora >= 5 && hora < 12) {
        msg.innerHTML += "Bom dia!"
        img.src = 'dia.png'
        document.body.style.background  = '#F9BC4E'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += "Boa tarde!"
        img.src = 'tarde.png'
        document.body.style.background = '#FEA301'
    } else if (hora >= 18 && hora <= 23) {
        msg.innerHTML += "Boa noite!"
        img.src = 'noite.png'
        document.body.style.background = '#3A2921'
    } else if (hora >= 0 && hora <= 5) {
        msg.innerHTML += "Boa madrugada!"
        img.src = 'noite.png'
        document.body.style.background = '#3A2921'
    }
}