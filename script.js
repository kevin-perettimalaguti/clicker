var scoreCount = document.getElementById('score-count');
var clickButton = document.getElementById('click');
var resetButton = document.getElementById('reset-button');
const lastscoreElement = document.getElementById('lastscore');
const generateFlamme = document.getElementById('textflammepersecond');
var score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
var flamesPerSecond = 1;

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

clickButton.addEventListener('click', addScore);
resetButton.addEventListener('click', resetScore);

updateScore();

// Démarre les flammes par seconde
setInterval(addFlamesPerSecond, 1000);

// Affichage du dernier score
lastscoreElement.textContent = "LAST SCORE : " + score;

// Afficher la génération des flammes par seconde
generateFlamme.textContent = "You generate " + flamesPerSecond + " flames per second";