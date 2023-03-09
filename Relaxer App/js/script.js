let text = document.getElementById("text"),
container = document.getElementById("container");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5 ;

breathAnimation();

function breathAnimation() {
    text.innerHTML = "Breathe In!";
    container.className = "container grow";
    setTimeout(()=> {
        text.innerHTML = "Hold";

        setTimeout(()=> {
            text.innerHTML = "Breathe out!";
            container.className = "container shrink";
        },holdTime);

    },breatheTime);
}


setInterval(breathAnimation,totalTime);