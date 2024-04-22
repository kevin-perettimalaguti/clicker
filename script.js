var scoreCount = document.getElementById('score-count');
var score = 0;


function addScore() {
    score++;
    scoreCount.textContent = score;
}

function resetScore() {
    score = 0;
    scoreCount.textContent = score;
}


var clickButton = document.getElementById('click');
clickButton.addEventListener('click', addScore);

var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetScore); 
