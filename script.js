var scoreCount = document.getElementById('score-count');
var clickButton = document.getElementById('click');
var resetButton = document.getElementById('reset-button');
var lastscoreElement = document.getElementById('lastscore');
var score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
var flamesPerSecond = 1; // Nombre de flammes par seconde

// Mise à jour de l'affichage du score
function updateScore() {
    scoreCount.textContent = score;
}

// Ajout du score
function addScore() {
    score++;
    updateScore();
    localStorage.setItem('score', score); 
}

// Réinitialisation du score
function resetScore() {
    score = 0;
    updateScore();
    localStorage.setItem('score', score);
}

// Fonction pour ajouter des flammes par seconde
function addFlamesPerSecond() {
    score += flamesPerSecond;
    updateScore();
}

// Affichage du dernier score
function displayLastScore() {
    lastscoreElement.textContent = "LAST SCORE : " + score;
}

clickButton.addEventListener('click', addScore);
resetButton.addEventListener('click', resetScore);

updateScore();

// Démarre les flammes par seconde
setInterval(addFlamesPerSecond, 1000);

displayLastScore();
