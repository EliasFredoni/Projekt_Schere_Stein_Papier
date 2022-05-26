console.log("SCHERE || STEIN || PAPIER");

//**********DOM****************/

const user = 0;
const cpu = 0;

const userScore_span = document.getElementById("userScore");
const upuScore_span = document.getElementById("upuScore");

//const ergebnis_div = document.getElementById("ergebnis");
const antwort_p = document.getElementById("antwort");

const schere_img = document.getElementById("schere"); //VAlUE
const stein_img = document.getElementById("stein");
const papier_img = document.getElementById("papier");
const reset_h2 = document.getElementById("reset");     //

//**********FUNCTION************/


const computer = () => {
    let auswahl = ["schere", "stein", "papier", "reset"];
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber)
    return auswahl[randomNumber];
};

let spiel = () => {
    console.log("Hi dude")
}

let schere = () => {
    console.log("hey, du hast auf die Schere geklickt");
    computer();
}

let stein = () => {
    console.log("funktioniert")
    computer();
}

let papier = () => {
    console.log("funktioniert")
    computer();
}

let neuerVersuch = () => {
    console.log("Neu Start")
    user;
    cpu;
}
























/*let WinMSG = document.getElementById("WinMSG");
let ChatMSG = document.getElementById("ChatMSG");
let LoseMSG = document.getElementById("LoseMSG");

onload = (event) => {
    ChatMSG.style.color = "green";


let wincount = 0;
let losecount = 0;
let message = "";
let winmsg = "";
let losemsg = "";

function clickscissors() {
    let random = Math.floor(Math.random() * 4);
    let Player = 0;
    let Bot = random;
    if (Bot === Player) {
        ChatMSG.style.color = "orange";
        message = "Gleichstand!   Dein Gegner hat auch Schere!";
        ChatMSG.innerText = message;
    } else if (Bot > 0 && Bot < 2) {
        ChatMSG.style.color = "red";
        message = "Verloren!   Dein Gegner hat Stein!";
        losemsg = "Lose: " + ++losecount;
        ChatMSG.innerText = message;
        LoseMSG.innerText = losemsg;
    } else if (Bot > 1 && Bot < 3) {
        ChatMSG.style.color = "green";
        message = "Gewonnen!   Dein Gegner hat Papier!";
        winmsg = "Wins: " + ++wincount;
        ChatMSG.innerText = message;
        WinMSG.innerText = winmsg;
    } else {
        ChatMSG.style.color = "red";
        message = "Verloren!   Dein Gegner hat Stein!";
        losemsg = "Lose: " + ++losecount;
        ChatMSG.innerText = message;
        LoseMSG.innerText = losemsg;
    }
};

function clickstone() {
    let random = Math.floor(Math.random() * 4);
    let Player = 1;
    let Bot = random;
    if (Bot === Player) {
        ChatMSG.style.color = "orange";
        message = "Gleichstand!   Dein Gegner hat auch Stein!";
        ChatMSG.innerText = message;
    } else if (Bot < 1) {
        ChatMSG.style.color = "green";
        message = "Gewonnen!   Dein Gegner hat Schere!";
        winmsg = "Wins: " + ++wincount;
        ChatMSG.innerText = message;
        WinMSG.innerText = winmsg;
    } else if (Bot > 1 && Bot < 3) {
        ChatMSG.style.color = "red";
        message = "Verloren!   Dein Gegner hat Papier!";
        losemsg = "Lose: " + ++losecount;
        ChatMSG.innerText = message;
        LoseMSG.innerText = losemsg;
    } else {
        ChatMSG.style.color = "red";
        message = "Verloren!   Dein Gegner hat Papier!";
        losemsg = "Lose: " + ++losecount;
        ChatMSG.innerText = message;
        LoseMSG.innerText = losemsg;
    }
};

function clickpaper() {
    let random = Math.floor(Math.random() * 4);
    let Player = 2;
    let Bot = random;
    if (Bot === Player) {
        ChatMSG.style.color = "orange";
        message = "Gleichstand!   Dein Gegner hat auch Papier!";
        ChatMSG.innerText = message;
    } else if (Bot < 2 && Bot > 0) {
        ChatMSG.style.color = "green";
        message = "Gewonnen!   Dein Gegner hat Stein!";
        winmsg = "Wins: " + ++wincount;
        ChatMSG.innerText = message;
        WinMSG.innerText = winmsg;
    } else if (Bot < 1) {
        ChatMSG.style.color = "red";
        message = "Verloren!   Dein Gegner hat Schere!";
        losemsg = "Lose: " + ++losecount;
        ChatMSG.innerText = message;
        LoseMSG.innerText = losemsg;
    } else {
        ChatMSG.style.color = "red";
        message = "Verloren!   Dein Gegner hat Schere!";
        losemsg = "Lose: " + ++losecount;
        ChatMSG.innerText = message;
        LoseMSG.innerText = losemsg;
    }
};

function clickreset() {
    message = "Ein neuer Anfang!";
    losecount = 0;
    wincount = 0;
    losemsg = "Lose: 0";
    winmsg = "Wins: 0";
    ChatMSG.innerText = message;
    LoseMSG.innerText = losemsg;
    WinMSG.innerText = winmsg;
    ChatMSG.style.color = "lightgreen";
}
*/
