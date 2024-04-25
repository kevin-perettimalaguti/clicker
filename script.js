var scoreCount = document.getElementById('score-count');
var clickButton = document.getElementById('click');
var resetButton = document.getElementById('reset-button');
var clickUpgrade = document.getElementById('upgrade1');
var clickUpgradeW = document.getElementById('upgradeW');
var clickUpgrade2 = document.getElementById('upgrade2');
var clickUpgrade3 = document.getElementById('upgrade3');
var clickUpgrade4 = document.getElementById('upgrade4');
var clickUpgrade5 = document.getElementById('upgrade5');
var clickImprovementPaper = document.getElementById('cisceaupdate');
var clickImprovementWood = document.getElementById('axeupdate');
var lastscoreElement = document.getElementById('lastscore');
var generateFlamme = document.getElementById('textflammepersecond');
var score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
var flamesPerSecond = localStorage.getItem('flamesPerSecond') ? parseInt(localStorage.getItem('flamesPerSecond')) : 0;
var upgrade1Price = localStorage.getItem('upgrade1Price') ? parseInt(localStorage.getItem('upgrade1Price')) : 10;
var upgradeWPrice = localStorage.getItem('upgradeWPrice') ? parseInt(localStorage.getItem('upgradeWPrice')) : 30;
var upgrade2Price = localStorage.getItem('upgrade2Price') ? parseInt(localStorage.getItem('upgrade2Price')) : 100;
var upgrade3Price = localStorage.getItem('upgrade3Price') ? parseInt(localStorage.getItem('upgrade3Price')) : 500;
var upgrade4Price = localStorage.getItem('upgrade4Price') ? parseInt(localStorage.getItem('upgrade4Price')) : 7500;
var upgrade5Price = localStorage.getItem('upgrade5Price') ? parseInt(localStorage.getItem('upgrade5Price')) : 90000;
var improvementPaperPrice = localStorage.getItem('improvementPaperPrice') ? parseInt(localStorage.getItem('improvementPaperPrice')) : 100;
var improvementWoodPrice = localStorage.getItem('improvementWoodPrice') ? parseInt(localStorage.getItem('improvementWoodPrice')) : 2000;
var stockElements = {
    "paper": 1,
    "wool": 2,
    "wood": 5,
    "coal": 25,
    "lava": 250,
    "obsidienne": 1000
};


function saveGameState() {
    localStorage.setItem('score', score);
    localStorage.setItem('flamesPerSecond', flamesPerSecond);
    localStorage.setItem('upgrade1Price', upgrade1Price);
    localStorage.setItem('upgradeWPrice', upgradeWPrice);
    localStorage.setItem('upgrade2Price', upgrade2Price);
    localStorage.setItem('upgrade3Price', upgrade3Price);
    localStorage.setItem('upgrade4Price', upgrade4Price);
    localStorage.setItem('upgrade5Price', upgrade5Price);
    localStorage.setItem('improvementPaperPrice', improvementPaperPrice);
    localStorage.setItem('improvementWoodPrice', improvementWoodPrice);
}

function loadGameState() {
    score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
    flamesPerSecond = localStorage.getItem('flamesPerSecond') ? parseInt(localStorage.getItem('flamesPerSecond')) : 0;
    upgrade1Price = localStorage.getItem('upgrade1Price') ? parseInt(localStorage.getItem('upgrade1Price')) : 10;
    upgradeWPrice = localStorage.getItem('upgradeWPrice') ? parseInt(localStorage.getItem('upgradeWPrice')) : 30;
    upgrade2Price = localStorage.getItem('upgrade2Price') ? parseInt(localStorage.getItem('upgrade2Price')) : 100;
    upgrade3Price = localStorage.getItem('upgrade3Price') ? parseInt(localStorage.getItem('upgrade3Price')) : 500;
    upgrade4Price = localStorage.getItem('upgrade4Price') ? parseInt(localStorage.getItem('upgrade4Price')) : 7500;
    upgrade5Price = localStorage.getItem('upgrade5Price') ? parseInt(localStorage.getItem('upgrade5Price')) : 90000;
    improvementPaperPrice = localStorage.getItem('improvementPaperPrice') ? parseInt(localStorage.getItem('improvementPaperPrice')) : 100;
    improvementWoodPrice = localStorage.getItem('improvementWoodPrice') ? parseInt(localStorage.getItem('improvementWoodPrice')) : 2000;

    updateScore();
    updateUpgrade1Price();
    updateUpgradeWPrice();
    updateUpgrade2Price();
    updateUpgrade3Price();
    updateUpgrade4Price();
    updateUpgrade5Price();
    updateFlamesPerSecondText();
    updatePriceImprovementPaper();
    updatePriceImprovementWood();
}

function updateScore() {
    scoreCount.textContent = formatPrice(score);
}

function formatPrice(price) {
    if (price >= 1000000000) {
        return (price / 1000000000).toFixed(2) + "B";
    } else if (price >= 1000000) {
        return (price / 1000000).toFixed(2) + "M";
    } else if (price >= 1000) {
        return (price / 1000).toFixed(2) + "k";
    } else {
        return price.toString();
    }
}

function addScore() {
    score++;
    updateScore();
    localStorage.setItem('score', score);
    saveGameState();
}

function updateFlamesPerSecondText() {
    generateFlamme.textContent = "You generate " + formatPrice(flamesPerSecond) + " flames per second";
    localStorage.setItem('flamesPerSecond', flamesPerSecond)
}

function updateUpgrade1Price() {
    var upgrade1PriceElement = document.getElementById('upgrade1-price');
    upgrade1PriceElement.textContent = formatPrice(upgrade1Price) + " kW/m²";
}

function updateUpgradeWPrice() {
    var upgradeWPriceElement = document.getElementById('upgradeW-price');
    upgradeWPriceElement.textContent = formatPrice(upgradeWPrice) + " kW/m²";
}


function updateUpgrade2Price() {
    var upgrade2PriceElement = document.getElementById('upgrade2-price');
    upgrade2PriceElement.textContent = formatPrice(upgrade2Price) + " kW/m²";
}

function updateUpgrade3Price() {
    var upgrade3PriceElement = document.getElementById('upgrade3-price');
    upgrade3PriceElement.textContent = formatPrice(upgrade3Price) + " kW/m²";
}

function updateUpgrade4Price() {
    var upgrade4PriceElement = document.getElementById('upgrade4-price');
    upgrade4PriceElement.textContent = formatPrice(upgrade4Price) + " kW/m²";
}

function updateUpgrade5Price() {
    var upgrade5PriceElement = document.getElementById('upgrade5-price');
    upgrade5PriceElement.textContent = formatPrice(upgrade5Price) + " kW/m²";
}

function updatePriceImprovementPaper() {
    var improvementPaperPriceElement = document.getElementById('improvementPaper-Price');
    improvementPaperPriceElement.textContent = formatPrice(improvementPaperPrice);
}

function updatePriceImprovementWood() {
    var improvementWoodPriceElement = document.getElementById('improvementWood-Price');
    improvementWoodPriceElement.textContent = formatPrice(improvementWoodPrice);
}

function upgrade1() {
    if (score >= upgrade1Price) {
        flamesPerSecond += stockElements["paper"];
        score -= upgrade1Price;
        upgrade1Price *= 2 * 1.5;
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

function upgradeW() {
    if (score >= upgradeWPrice) {
        flamesPerSecond += stockElements["wool"];
        score -= upgradeWPrice;
        upgradeWPrice *= 2 * 1.5;
        updateScore();
        updateFlamesPerSecondText();
        updateUpgradeWPrice();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    }else{
        alert("You don't have enough score to buy this upgrade!");
    }
}


function upgrade2() {
    if (score >= upgrade2Price) {
        flamesPerSecond += stockElements["wood"];
        score -= upgrade2Price;
        upgrade2Price *= 2 * 2;
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

function upgrade3() {
    if (score >= upgrade3Price) {
        flamesPerSecond += stockElements["coal"];
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
        flamesPerSecond += stockElements["lava"];
        score -= upgrade4Price;
        upgrade4Price *= 2 * 2;
        updateScore();
        updateFlamesPerSecondText();
        updateUpgrade4Price();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this upgrade!");
    }
}

function upgrade5() {
    if (score >= upgrade5Price) {
        flamesPerSecond += stockElements["obsidienne"];
        score -= upgrade5Price;
        upgrade5Price *= 2 * 2;
        updateScore();
        updateFlamesPerSecondText();
        updateUpgrade5Price();
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
        improvementPaperPrice *= 2 * 4;
        stockElements["paper"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementPaper();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this improvement!");
    }
}

function improvementWood() {
    if (score >= improvementWoodPrice) {
        score -= improvementWoodPrice;
        improvementWoodPrice *= 2 * 5;
        stockElements["wood"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementWood();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
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
        upgradeWPrice = 30;
        updateUpgradeWPrice();
        upgrade2Price = 100;
        updateUpgrade2Price();
        upgrade3Price = 500;
        updateUpgrade3Price();
        upgrade4Price = 7500;
        updateUpgrade4Price();
        upgrade5Price = 90000;
        updateUpgrade5Price();
        improvementPaperPrice = 100
        updatePriceImprovementPaper()
        improvementWoodPrice = 2000
        updatePriceImprovementWood()
        stockElements["paper"] = 1
        stockElements["wood"] = 2
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

clickButton.addEventListener('click', addScore);
resetButton.addEventListener('click', resetScore);
clickUpgrade.addEventListener('click', upgrade1);
clickUpgradeW.addEventListener('click', upgradeW);
clickUpgrade2.addEventListener('click', upgrade2);
clickUpgrade3.addEventListener('click', upgrade3);
clickUpgrade4.addEventListener('click', upgrade4);
clickUpgrade5.addEventListener('click', upgrade5);
clickImprovementPaper.addEventListener('click', improvementPaper)
clickImprovementWood.addEventListener('click', improvementWood)



updateScore();
setInterval(addFlamesPerSecond, 1000);
lastscoreElement.textContent = "LAST SCORE : " + score;

updateUpgrade1Price();
updateUpgradeWPrice();
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