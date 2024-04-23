var scoreCount = document.getElementById('score-count');
var clickButton = document.getElementById('click');
var resetButton = document.getElementById('reset-button');
var clickUpgrade = document.getElementById('upgrade1');
var clickUpgrade2 = document.getElementById('upgrade2');
var clickUpgrade3 = document.getElementById('upgrade3');
var clickUpgrade4 = document.getElementById('upgrade4');
var clickUpgrade5 = document.getElementById('upgrade5');
const lastscoreElement = document.getElementById('lastscore');
const generateFlamme = document.getElementById('textflammepersecond');
var score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
var flamesPerSecondText = localStorage.getItem('flamesPerSecond') ? parseInt(localStorage.getItem('flamesPerSecond')) : 0;
var flamesPerSecond = 0;
var upgrade1Price = 10;
var upgrade2Price = 100;





// Enregistrer le score et les flammes par seconde dans le localStorage à chaque changement
function saveGameState() {
    localStorage.setItem('score', score);
    localStorage.setItem('flamesPerSecond', flamesPerSecond);
}


function updateScore() {
    scoreCount.textContent = score;
}


function addScore() {
    score++;
    updateScore();
    localStorage.setItem('score', score); 
}


function updateFlamesPerSecondText() {
    generateFlamme.textContent = "You generate " + flamesPerSecond + " flames per second";
    localStorage.setItem('flamesPerSecond', flamesPerSecond);
}

function updateUpgrade1Price() {
    var upgrade1PriceElement = document.getElementById('upgrade1-price');
    upgrade1PriceElement.textContent = upgrade1Price + " kW/m²";
}
function updateUpgrade2Price() {
    var upgrade2PriceElement = document.getElementById('upgrade2-price');
    upgrade2PriceElement.textContent = upgrade2Price + " kW/m²";
}

function upgrade1(){

    if (score >= upgrade1Price) {
        flamesPerSecond++;
        score -= upgrade1Price; 
        upgrade1Price *= 2 * 2; 
        updateScore();
        updateFlamesPerSecondText(); 
        updateUpgrade1Price(); 
        localStorage.setItem('score', score);
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this upgrade!");
    }
}

function upgrade2(){
    if (score >= upgrade2Price) {
        flamesPerSecond+= 2;
        score -= upgrade2Price; // Déduit le prix de l'upgrade du score
        upgrade1Price *= 2 * 2; // Double le prix de l'upgrade pour l'achat suivant
        updateScore();
        updateFlamesPerSecondText();
        updateUpgrade2Price(); 
        localStorage.setItem('score', score);
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this upgrade!");
    }
}
function upgrade3(){
    flamesPerSecond+= 10;
    updateScore();
    updateFlamesPerSecondText(); 
    localStorage.setItem('score', score);
    return flamesPerSecond;
}
function upgrade4(){
    flamesPerSecond+= 20;
    updateScore();
    updateFlamesPerSecondText(); 
    localStorage.setItem('score', score);
    return flamesPerSecond;
}
function upgrade5(){
    flamesPerSecond+= 100;
    updateScore();
    updateFlamesPerSecondText(); 
    localStorage.setItem('score', score);
    return flamesPerSecond;
}





function resetScore() {
    var confirmation = confirm("Are you sure you want to reset?");

    if (confirmation) {
        score = 0;
        updateScore();
        flamesPerSecond = 0; 
        updateFlamesPerSecondText();
        upgrade1Price = 10;
        updateUpgrade1Price(); // Mettre à jour le prix de la mise à niveau 1 dans l'interface utilisateur
        upgrade2Price = 100;
        updateUpgrade2Price(); // Mettre à jour le prix de la mise à niveau 2 dans l'interface utilisateur
        localStorage.setItem('score', score);
    } else {
        return;
    }
}




// function addFlamesPerSecond() {
//     score += flamesPerSecond;
//     updateScore();
// }



clickButton.addEventListener('click', addScore);
resetButton.addEventListener('click', resetScore);
clickUpgrade.addEventListener('click', upgrade1);
clickUpgrade2.addEventListener('click', upgrade2);
clickUpgrade3.addEventListener('click', upgrade3);
clickUpgrade4.addEventListener('click', upgrade4);
clickUpgrade5.addEventListener('click', upgrade5);

updateScore();

setInterval(addFlamesPerSecond, 1000);

lastscoreElement.textContent = "LAST SCORE : " + score;

updateUpgrade1Price();
updateUpgrade2Price();
updateFlamesPerSecondText();