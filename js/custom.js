window.setInterval(clock, 1);

function clock() {
    let time = new Date();
    document.getElementById("clock").innerHTML = time.toLocaleTimeString();
    document.getElementById("clock").style.display = "block";
    document.getElementById("clock").style.position = "relative";
    document.getElementById("clock").style.right = "33rem";
}

window.setInterval(date, 1);

function date() {
    let d = new Date();
    document.getElementById("date").innerHTML = d;
    document.getElementById("date").style.display = "block";
    document.getElementById("date").style.position = "relative";
    document.getElementById("date").style.right = "30rem";
}