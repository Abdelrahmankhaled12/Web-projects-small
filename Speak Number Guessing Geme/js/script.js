// Get Element msg
let msgEl = document.getElementById("msg");


let randomNumber = getRandomNumber();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();


// Capture user speak
function onSpeak(e) {
    const msg = e.results[0][0].transcript;
    writeMessage(msg);
    checkNumber(msg);
}

// Write What Use Speaks
function writeMessage(msg) {
    msgEl.innerHTML = `
    <div>You said: </div>
    <span class="box">${msg}</span>
    `;
}

// Check msg against number
function checkNumber(msg) {
    let num = +msg;
    // Check Number or Not
    if (Number.isNaN(num)) {
        msgEl.innerHTML += '<div>That is not a valid number</div>';
    }
    // Check Number in range
    if (num > 100 || num < 1) {
        msgEl.innerHTML += '<div>Number must be between 1 and 100</div>';
    }
    // Check number
    if (num === randomNumber) {
        document.body.innerHTML = `
    <h2>Congrats! You have guessed the number! <br><br>
    It was ${num}</h2>
    <button class="play-again" id="play-again" onclick="location.reload()">Play Again</button>
    `;
    } else if (num > randomNumber) {
        msgEl.innerHTML += '<div>GO LOWER</div>';
    } else {
        msgEl.innerHTML += '<div>GO HIGHER</div>';
    }
}


// Generate Random Number
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


// Speak Result 
recognition.addEventListener("result", onSpeak);

// End SR service
recognition.addEventListener('end', () => recognition.start());