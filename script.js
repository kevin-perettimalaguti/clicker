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
var flamesPerSecond = 0;


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
}


function upgrade1(){
    flamesPerSecond++;
    updateScore();
    updateFlamesPerSecondText(); 
    localStorage.setItem('score', score);
    return flamesPerSecond;
}

function upgrade2(){
    flamesPerSecond+= 2;
    updateScore();
    updateFlamesPerSecondText(); 
    localStorage.setItem('score', score);
    return flamesPerSecond;
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
        localStorage.setItem('score', score);
    } else {
       
        return;
    }
}



function addFlamesPerSecond() {
    score += flamesPerSecond;
    updateScore();
}

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


updateFlamesPerSecondText();