console.log("%c****************", 'color:tomato');
console.log("%cSCHERE | STEIN | PAPIER © Yles / SuperCode 2022", 'color:green');
console.log("%c****************", 'color:tomato');

//**********DOM******************//

let userScore_span = document.getElementById("userScore");
let cpuScore_span = document.getElementById("cpuScore");

let antwort_p = document.getElementById("antwort");

let win = 0;
let lose = 0;
let message = "";
let winMassage = "";
let loseMassage = "";

//**********FUNKTION**********//

function schere() {
    let random = Math.floor(Math.random() * 3);
    let Player = 0;
    let Bot = random;
    if (Bot === Player) {
        antwort_p.style.color = "orange";
        message = "Gleichstand";
        antwort_p.innerText = message;
    } else if (Bot > 0 && Bot < 2) {
        antwort_p.style.color = "red";
        message = "Verloren";
        loseMassage = ++lose;
        antwort_p.innerText = message;
        cpuScore_span.innerText = loseMassage;
    } else if (Bot > 1 && Bot < 3) {
        antwort_p.style.color = "green";
        message = "Gewonnen!";
        winMassage = ++win;
        antwort_p.innerText = message;
        userScore_span.innerText = winMassage;
    } else {
        antwort_p.style.color = "red";
        message = "Verloren";
        loseMassage = ++lose;
        antwort_p.innerText = message;
        cpuScore_span.innerText = loseMassage;
    }
}

function stein() {
    let random = Math.floor(Math.random() * 3);
    let Player = 1;
    let Bot = random;
    if (Bot === Player) {
        antwort_p.style.color = "orange";
        message = "Gleichstand";
        antwort_p.innerText = message;
    } else if (Bot < 1) {
        antwort_p.style.color = "green";
        message = "Gewonnen!";
        winMassage = ++win;
        antwort_p.innerText = message;
        userScore_span.innerText = winMassage;
    } else if (Bot > 1 && Bot < 3) {
        antwort_p.style.color = "red";
        message = "Verloren";
        loseMassage = ++lose;
        antwort_p.innerText = message;
        cpuScore_span.innerText = loseMassage;
    } else {
        antwort_p.style.color = "red";
        message = "Verloren";
        loseMassage = ++lose;
        antwort_p.innerText = message;
        cpuScore_span.innerText = loseMassage;
    }
}

function papier() {
    let random = Math.floor(Math.random() * 3);
    let Player = 2;
    let Bot = random;
    if (Bot === Player) {
        antwort_p.style.color = "orange";
        message = "Gleichstand";
        antwort_p.innerText = message;
    } else if (Bot < 2 && Bot > 0) {
        antwort_p.style.color = "green";
        message = "Gewonnen!";
        winMassage = ++win;
        antwort_p.innerText = message;
        userScore_span.innerText = winMassage;
    } else if (Bot < 1) {
        antwort_p.style.color = "red";
        message = "Verloren";
        loseMassage = ++lose;
        antwort_p.innerText = message;
        cpuScore_span.innerText = loseMassage;
    } else {
        antwort_p.style.color = "red";
        message = "Verloren";
        loseMassage = ++lose;
        antwort_p.innerText = message;
        cpuScore_span.innerText = loseMassage;
    }
}

function neuerVersuch() {
    message = "Ein neuer Anfang";
    lose = 0;
    win = 0;
    loseMassage = "0";
    winMassage = "0";
    antwort_p.innerText = message;
    cpuScore_span.innerText = loseMassage;
    userScore_span.innerText = winMassage;
    antwort_p.style.color = "lightgreen";
}