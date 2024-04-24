var scoreCount = document.getElementById('score-count');
var clickButton = document.getElementById('click');
var resetButton = document.getElementById('reset-button');
var clickUpgrade = document.getElementById('upgrade1');
var clickUpgrade2 = document.getElementById('upgrade2');
var clickImprovementPaper = document.getElementById('cisceaupdate')
const lastscoreElement = document.getElementById('lastscore');
const generateFlamme = document.getElementById('textflammepersecond');
var score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
var flamesPerSecond = localStorage.getItem('flamesPerSecond') ? parseInt(localStorage.getItem('flamesPerSecond')) : 0;
var upgrade1Price = localStorage.getItem('upgrade1Price') ? parseInt(localStorage.getItem('upgrade1Price')) : 10;
var upgrade2Price = localStorage.getItem('upgrade2Price') ? parseInt(localStorage.getItem('upgrade2Price')) : 100;
var improvementPaperPrice = localStorage.getItem('improvementPaperPrice') ? parseInt(localStorage.getItem('improvementPaperPrice')) : 1000;
var improvementWoodPrice = localStorage.getItem('improvementWoodPrice') ? parseInt(localStorage.getItem('improvementWoodPrice')) : 3000;
var stockElements = {
    "paper": 1,
    "wood": 2
}

function saveGameState() {
    localStorage.setItem('score', score);
    localStorage.setItem('flamesPerSecond', flamesPerSecond);
    localStorage.setItem('upgrade1Price', upgrade1Price);
    localStorage.setItem('upgrade2Price', upgrade2Price);
}

function updateScore() {
    scoreCount.textContent = score;
}

function addScore() {
    score++;
    updateScore();
    localStorage.setItem('score', score);
    saveGameState();
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

function updatePriceImprovementPaper() {
    var upgrade2PriceElement = document.getElementById('cisceaupdate');
    upgrade2PriceElement.textContent = improvementPaperPrice + " kW/m²";
}

function updatepriceImprovementWood() {
    var upgrade2PriceElement = document.getElementById('axeupdate');
    upgrade2PriceElement.textContent = improvementWoodPrice + " kW/m²";
}

function upgrade1() {
    if (score >= upgrade1Price) {
        score -= upgrade1Price;
        upgrade1Price *= 2 * 2;
        flamesPerSecond += stockElements["paper"];
        updateScore();
        updateFlamesPerSecondText();
        updateUpgrade1Price();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this upgrade!");
    }
}

function upgrade2() {
    if (score >= upgrade2Price) {
        score -= upgrade2Price;
        upgrade2Price *= 2 * 2;
        flamesPerSecond += stockElements["wood"];
        updateScore();
        updateFlamesPerSecondText();
        updateUpgrade2Price();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this upgrade!");
    }
}

function improvementPaper() {
    if (score >= improvementPaperPrice) {
        score -= improvementPaperPrice;
        improvementPaperPrice *= 2 * 2;
        stockElements["paper"]*= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementPaper();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this upgrade!");
    }
}

function improvementWood() {
    if (score >= improvementWoodPrice) {
        score -= improvementWoodPrice;
        improvementWoodPrice *= 2 * 2;
        stockElements["wood"]*= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatepriceImprovementWood();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this upgrade!");
    }
}
function resetScore() {
    var confirmation = confirm("Are you sure you want to reset?");
    if (confirmation) {
        score = 0;
        updateScore();
        flamesPerSecond = 0;
        updateFlamesPerSecondText();
        upgrade1Price = 10;
        updateUpgrade1Price();
        upgrade2Price = 100;
        updateUpgrade2Price();
        localStorage.setItem('score', score);
        saveGameState();
    } else {
        return;
    }
}

function addFlamesPerSecond() {
    score += flamesPerSecond;
    updateScore();
    saveGameState();
}

clickImprovementPaper.addEventListener('click', improvementPaper)
clickButton.addEventListener('click', addScore);
resetButton.addEventListener('click', resetScore);
clickUpgrade.addEventListener('click', upgrade1);
clickUpgrade2.addEventListener('click', upgrade2);

updateScore();
setInterval(addFlamesPerSecond, 1000);
lastscoreElement.textContent = "LAST SCORE : " + score;
updateUpgrade1Price();
updateUpgrade2Price();
updateFlamesPerSecondText();
