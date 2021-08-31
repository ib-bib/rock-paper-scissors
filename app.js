var userScr = 0;
var compScr= 0;
const userScore_span = document.getElementById("UserScore");
const compScore_span = document.getElementById("CompScore");
const scoreboard_div = document.querySelector(".score-board");
const userShoot_span = document.getElementById("YouPick");
const compShoot_span = document.getElementById("CpuPick");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");
const uWord = "(You)".fontsize(3).sub();
const cWord = "(AI)".fontsize(3).sub();

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

function getUserImage(chosen){
    var image = document.createElement("img");
    if(chosen === "R") {
        image.src = 'rock.png';
        image.alt = "Rock";
    }
    if(chosen === "P") {
        image.src = 'paper.png';
        image.alt = "Paper";
    }
    if( chosen === "S") {
        image.src = 'scissors.png';
        image.alt = "Scissors";
    }
    image.width = "100";
    image.height = "100";
    placeUserImage(image);
}

function getCompImage(chosen) {
    var image = document.createElement("img");
    if(chosen === "R") {
        image.src = 'rock.png';
        image.alt = "Rock";
    }
    if(chosen === "P") {
        image.src = 'paper.png';
        image.alt = "Paper";
    }
    if( chosen === "S") {
        image.src = 'scissors.png';
        image.alt = "Scissors";
    }
    image.width = "100";
    image.height = "100";
    placeCompImage(image);
}

function placeUserImage(pic) {
    if ( userShoot_span.hasChildNodes() ) {
        var oldPic = userShoot_span.lastChild;
        userShoot_span.replaceChild(pic, oldPic);
    }
    userShoot_span.appendChild(pic);
}

function placeCompImage(pic) {
    if ( compShoot_span.hasChildNodes() ) {
        var oldPic = compShoot_span.lastChild;
        compShoot_span.replaceChild(pic, oldPic);
    }
    compShoot_span.appendChild(pic);
}

function win(user, comp) {
    var where = document.getElementById(user);
    userScr++;
    userScore_span.innerHTML = userScr;
    result_p.innerHTML = `${convertLetter(user)}${uWord} beats ${convertLetter(comp)}${cWord}!\nYou win! :D`;
    where.classList.add('greenGlow');
    setTimeout(() => where.classList.remove('greenGlow'), 450 );
}

function lose(user, comp) {
    var where = document.getElementById(user);
    compScr++;
    compScore_span.innerHTML = compScr;
    result_p.innerHTML =` ${convertLetter(comp)}${cWord} beats ${convertLetter(user)}${uWord}!\nYou lose... :C`;
    where.classList.add('redGlow');
    setTimeout( () => where.classList.remove('redGlow'), 450 );
}

function draw(user) {
    var where = document.getElementById(user);
    userScore_span.innerHTML = userScr;
    compScore_span.innerHTML = compScr;
    result_p.innerHTML = "A DRAW!";
    where.classList.add('blueGlow');
    setTimeout(() => where.classList.remove('blueGlow'), 450 );
}

function gameFunc(userPick){
    const compPick = getCompChoice();
    getCompImage(compPick);
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
            draw(userPick);
            break;
    }
}

rock_div.addEventListener("click", function() {
    gameFunc("R");
    getUserImage("R");
})

paper_div.addEventListener("click", function() {
    gameFunc("P");
    getUserImage("P");
})

scissors_div.addEventListener("click", function() {
    gameFunc("S");
    getUserImage("S");
})