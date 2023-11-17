document.body.addEventListener("keyup", (evt) => {
    playSound(evt.code.toLowerCase()); // evento de click na tela inteira
});

document.querySelector(".composer button").addEventListener("click", () => { // para saber o que foi digitado
    let song = document.getElementById('input').value;

    if (song !== '') {
        let songArray =  song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) { // manda o primeiro evento para cá
    let audioElement = document.getElementById(`s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add("active")

        setTimeout(() => {
            keyElement.classList.remove("active"); 
        }, 300);
    }
}

function playComposition (songArray) {
    let wait = 0

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait);

        wait += 250;  
    }
}