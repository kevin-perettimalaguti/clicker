var scoreCount = document.getElementById('score-count');
var clickButton = document.getElementById('click');
var resetButton = document.getElementById('reset-button');
var lastscoreElement = document.getElementById('lastscore');
var score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
var flamesPerSecond = 1; 


function updateScore() {
    scoreCount.textContent = score;
}


function addScore() {
    score++;
    updateScore();
    localStorage.setItem('score', score); 
}

function resetScore() {
    
    var confirmation = confirm("Are you sure you want to reset?");

    
    if (confirmation) {
        score = 0;
        updateScore(); 
        localStorage.setItem('score', score);
    } else {
       
        return;
    }
}



function addFlamesPerSecond() {
    score += flamesPerSecond;
    updateScore();
}


function displayLastScore() {
    lastscoreElement.textContent = "LAST SCORE : " + score;
}

clickButton.addEventListener('click', addScore);
resetButton.addEventListener('click', resetScore);

updateScore();


setInterval(addFlamesPerSecond, 1000);

displayLastScore();
