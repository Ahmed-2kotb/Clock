function updateClock() {
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDegree = ((second / 60) * 360) + 90;
    const minuteDegree = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
    const hourDegree = ((hour % 12) / 12) * 360 + ((minute / 60) * 30) + 90;

    document.querySelector('.second').style.transform = `rotate(${secondDegree}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minuteDegree}deg)`;
    document.querySelector('.hour').style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
