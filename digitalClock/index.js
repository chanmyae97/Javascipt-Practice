const hoursEL = document.getElementById("hour");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h = h-12;
        ampm = "PM";
    }

    h = h<10 ? "0" + h : h;
    m = m<10? "0" + m : m;
    s = s<10? "0" + s : s;


    hoursEL.innerHTML = h;
    minutesEL.innerHTML = m;
    secondsEL.innerHTML = s;
    ampmEL.innerHTML = ampm;
}

setInterval(updateClock, 1000);