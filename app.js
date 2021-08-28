var userScr = 0;
var compScr= 0;
const userScore_span = document.getElementById("UserScore");
const compScore_span = document.getElementById("CompScore");
const scoreboard_dive = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");
const uWord = "You".fontsize(3).sub();
const cWord = "AI".fontsize(3).sub();

function getCompChoice(){
    const choices = ["R", "S", "P"];
    const randNum = Math.floor( Math.random() * 3);
    return choices[randNum];
}

function convertLetter(x) {
    if (x === "R") return "Rock";
    if (x === "P") return "Paper";
    return "Scissors";
}

function win(user, comp) {
    userScr++;
    userScore_span.innerHTML = userScr;
    result_p.innerHTML = `${convertLetter(user)}${uWord} beats ${convertLetter(comp)}${cWord}!\nYou win!`;
}

function lose(user, comp) {
    compScr++;
    compScore_span.innerHTML = compScr;
    result_p.innerHTML =` ${convertLetter(comp)}${cWord} beats ${convertLetter(user)}${uWord}!\nYou lose...`;
}

function draw() {
    userScr++;
    compScr++;
    userScore_span.innerHTML = userScr;
    compScore_span.innerHTML = compScr;
    result_p.innerHTML = "A DRAW!";
}

function gameFunc(userPick){
    const compPick = getCompChoice();
    switch (userPick + compPick) {
        case "RS":
        case "SP":
        case "PR":
            win(userPick, compPick);
            break;
        case "SR":
        case "PS":
        case "RP":
            lose(userPick, compPick);
            break;
        case "PP":
        case "RR":
        case "SS":
            draw();
            break;
    }
}

rock_div.addEventListener("click", function() {
    gameFunc("R");
})

paper_div.addEventListener("click", function() {
    gameFunc("P");
})

scissors_div.addEventListener("click", function() {
    gameFunc("S");
})
