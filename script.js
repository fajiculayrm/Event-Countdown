const myBirthday = "15 Oct 2022";
const daysLeft = document.querySelector("#days");
const hoursLeft = document.querySelector("#hours");
const minsLeft = document.querySelector("#minutes");
const secLeft = document.querySelector("#seconds");

function countDown() {
    const myBirthdayDate = new Date(myBirthday);
    const currentDate = new Date();
    const totalSeconds = (myBirthdayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysLeft.innerText = formatTime(days);
    hoursLeft.innerText = formatTime(hours);
    minsLeft.innerText = formatTime(minutes);
    secLeft.innerText = formatTime(seconds);
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    }
    return time;
}
setInterval(countDown, 1000);
