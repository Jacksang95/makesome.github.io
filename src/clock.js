const timeClock = document.querySelector(".js-clock"),
    clockTitle = timeClock.querySelector("h1");

function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

setInterval(getTime, 1000);

function init() {
    getTime();
}

init();
