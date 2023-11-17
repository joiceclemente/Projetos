let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let form = (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second)

    digitalElement.innerHTML = form
    // digitalElement.innerHTML = `${fix0(hour)} : ${fix0(minute)} : ${fix0(second)}`

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) -90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style. transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hElement}deg);`
}

// function fix0 (time) {
//     return time < 10 ? `0$(time)` : time;
// }

setInterval(updateClock, 1000);
updateClock();