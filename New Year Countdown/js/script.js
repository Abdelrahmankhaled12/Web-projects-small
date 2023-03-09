// Get Elements
let countdownEl = document.getElementById("countdown"),
    daysEl = document.getElementById("days"),
    hoursEl = document.getElementById("hours"),
    minutesEl = document.getElementById("minutes"),
    secondsEl = document.getElementById("seconds"),
    yearEL = document.getElementById("year"),
    loading = document.getElementById("loading");



const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Add Year to Dom 
yearEL.innerHTML = currentYear + 1;


// Update countdown time
function updateTime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const day = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const min = Math.floor(diff / 1000 / 60) % 60;
    const sec = Math.floor(diff / 1000) % 60;
    // Add values to DOM
    secondsEl.innerHTML = sec < 10 ? "0" + sec : sec;
    minutesEl.innerHTML = min < 10 ? "0" + min : min;
    hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
    daysEl.innerHTML = day;
}

// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);
  

// Run every second
setInterval(updateTime, 1000);