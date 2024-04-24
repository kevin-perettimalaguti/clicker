var scoreCount = document.getElementById('score-count');
var clickButton = document.getElementById('click');
var resetButton = document.getElementById('reset-button');
var clickUpgrade = document.getElementById('upgrade1');
var clickUpgrade2 = document.getElementById('upgrade2');
var clickUpgrade3 = document.getElementById('upgrade3');
var clickUpgrade4 = document.getElementById('upgrade4');
var clickUpgrade5 = document.getElementById('upgrade5');
var lastscoreElement = document.getElementById('lastscore');
var generateFlamme = document.getElementById('textflammepersecond');
var score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
var flamesPerSecond = localStorage.getItem('flamesPerSecond') ? parseInt(localStorage.getItem('flamesPerSecond')) : 0;
var upgrade1Price = localStorage.getItem('upgrade1Price') ? parseInt(localStorage.getItem('upgrade1Price')) : 10;
var upgrade2Price = localStorage.getItem('upgrade2Price') ? parseInt(localStorage.getItem('upgrade2Price')) : 100;
var improvementPaperPrice = localStorage.getItem('improvementPaperPrice') ? parseInt(localStorage.getItem('improvementPaperPrice')) : 10;
var improvementWoodPrice = localStorage.getItem('improvementWoodPrice') ? parseInt(localStorage.getItem('improvementWoodPrice')) : 20;
var stockElements = {
    "paper": 1,
    "wood": 2
}

function saveGameState() {
    localStorage.setItem('score', score);
    localStorage.setItem('flamesPerSecond', flamesPerSecond);
    localStorage.setItem('upgrade1Price', upgrade1Price);
    localStorage.setItem('upgrade2Price', upgrade2Price);
    localStorage.setItem('upgrade3Price', upgrade3Price);
    localStorage.setItem('upgrade4Price', upgrade4Price);
    localStorage.setItem('upgrade5Price', upgrade5Price);
}

function loadGameState() {
    score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
    flamesPerSecond = localStorage.getItem('flamesPerSecond') ? parseInt(localStorage.getItem('flamesPerSecond')) : 0;
    upgrade1Price = localStorage.getItem('upgrade1Price') ? parseInt(localStorage.getItem('upgrade1Price')) : 10;
    upgrade2Price = localStorage.getItem('upgrade2Price') ? parseInt(localStorage.getItem('upgrade2Price')) : 100;
    upgrade3Price = localStorage.getItem('upgrade3Price') ? parseInt(localStorage.getItem('upgrade3Price')) : 1000;
    upgrade4Price = localStorage.getItem('upgrade4Price') ? parseInt(localStorage.getItem('upgrade4Price')) : 10000;
    upgrade5Price = localStorage.getItem('upgrade5Price') ? parseInt(localStorage.getItem('upgrade5Price')) : 100000;
    
    updateScore();
    updateUpgrade1Price();
    updateUpgrade2Price();
    updateUpgrade3Price();
    updateUpgrade4Price();
    updateUpgrade5Price();
    updateFlamesPerSecondText();
    localStorage.setItem('improvementPaperPrice', improvementPaperPrice);
    localStorage.setItem('improvementWoodPrice', improvementWoodPrice);
}

function updateScore() {
    scoreCount.textContent = score;
}

function updateFlamesPerSecondText() {
    generateFlamme.textContent = "You generate " + flamesPerSecond + " flames per second";
}

function updateUpgrade1Price() {
    var upgrade1PriceElement = document.getElementById('upgrade1-price');
    upgrade1PriceElement.textContent = upgrade1Price + " kW/m²";
}

function updateUpgrade2Price() {
    var upgrade2PriceElement = document.getElementById('upgrade2-price');
    upgrade2PriceElement.textContent = upgrade2Price + " kW/m²";
}

function updateUpgrade3Price() {
    var upgrade3PriceElement = document.getElementById('upgrade3-price');
    upgrade3PriceElement.textContent = upgrade3Price + " kW/m²";
}

function updateUpgrade4Price() {
    var upgrade4PriceElement = document.getElementById('upgrade4-price');
    upgrade4PriceElement.textContent = upgrade4Price + " kW/m²";
function updatePriceImprovementPaper() {
    var improvementPaperPriceElement = document.getElementById('improvementPaper-Price');
    improvementPaperPriceElement.textContent = improvementPaperPrice;
}

function updateUpgrade5Price() {
    var upgrade5PriceElement = document.getElementById('upgrade5-price');
    upgrade5PriceElement.textContent = upgrade5Price + " kW/m²";
function updatePriceImprovementWood() {
    var improvementWoodPriceElement = document.getElementById('improvementWood-Price');
    improvementWoodPriceElement.textContent = improvementWoodPrice;
}

function addScore() {
    score++;
    updateScore();
    saveGameState();
}

function upgrade1() {
    if (score >= upgrade1Price) {
        flamesPerSecond++;
        score -= upgrade1Price;
        upgrade1Price *= 2 * 2;
        updateScore();
        updateFlamesPerSecondText();
        updateUpgrade1Price();
        localStorage.setItem('score', score);
        saveGameState();
    } else {
        alert("You don't have enough score to buy this upgrade!");
    }
}

function upgrade2() {
    if (score >= upgrade2Price) {
        flamesPerSecond += 2;
        score -= upgrade2Price;
        upgrade2Price *= 2 * 2;
        updateScore();
        updateFlamesPerSecondText();
        updateUpgrade2Price(); // Ajout de cette ligne pour mettre à jour le prix affiché
        saveGameState();
    } else {
        alert("You don't have enough score to buy this upgrade!");
    }
}

function upgrade3() {
    if (score >= upgrade3Price) {
        flamesPerSecond += 10;
        score -= upgrade3Price;
        upgrade3Price *= 2 * 2;
        updateScore();
        updateFlamesPerSecondText();
        updateUpgrade3Price();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this upgrade!");
    }
}

function upgrade4() {
    if (score >= upgrade4Price) {
        flamesPerSecond += 50;
        score -= upgrade4Price;
        upgrade4Price *= 2 * 2;
function improvementPaper() {
    if (score >= improvementPaperPrice) {
        score -= improvementPaperPrice;
        improvementPaperPrice *= 2 * 2;
        stockElements["paper"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updateUpgrade4Price(); 
        saveGameState();
    } else {
        alert("You don't have enough score to buy this improvement!");
    }
}

function upgrade5() {
    if (score >= upgrade5Price) {
        flamesPerSecond += 100;
        score -= upgrade5Price;
        upgrade5Price *= 2 * 2;
function improvementWood() {
    if (score >= improvementWoodPrice) {
        score -= improvementWoodPrice;
        improvementWoodPrice *= 2 * 2;
        stockElements["wood"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updateUpgrade5Price();
        localStorage.setItem('score', score);
        updatePriceImprovementWood(); 
        saveGameState();
    } else {
        alert("You don't have enough score to buy this improvement!");
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
        upgrade3Price = 1000;
        updateUpgrade3Price();
        upgrade4Price = 10000;
        updateUpgrade4Price();
        upgrade5Price = 100000;
        updateUpgrade5Price();
        localStorage.setItem('score', score);
        saveGameState();
    } else {
        return;
    }
}

function addFlamesPerSecond() {
    score += flamesPerSecond;
    updateScore();
    updateFlamesPerSecondText();
    saveGameState();
}

clickImprovementWood.addEventListener('click', improvementWood)
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
updateUpgrade3Price();
updateUpgrade4Price();
updateUpgrade5Price();
updateFlamesPerSecondText();

window.addEventListener('beforeunload', function() {
    saveGameState();
});

window.addEventListener('load', function() {
    loadGameState();
    
});
