var scoreCount = document.getElementById('score-count');
var clickButton = document.getElementById('click');
var resetButton = document.getElementById('reset');


var clickUpgrade = document.getElementById('upgrade1');
var clickUpgradeW = document.getElementById('upgradeW');
var clickUpgrade2 = document.getElementById('upgrade2');
var clickUpgrade3 = document.getElementById('upgrade3');
var clickUpgrade4 = document.getElementById('upgrade4');
var clickUpgrade5 = document.getElementById('upgrade5');


var clickImprovementPaper = document.getElementById('cisceaupdate');
var clickImprovementWood = document.getElementById('axeupdate');
var clickImprovementClick = document.getElementById('steakupdate');
var clickImprovementWool = document.getElementById('sheepupdate');
var clickImprovementCoal = document.getElementById('furnaceupdate');
var clickImprovementLava = document.getElementById('caveupdate');
var clickImprovementObsidienne = document.getElementById('portalupdate');


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


var improvementPaperPrice = localStorage.getItem('improvementPaperPrice') ? parseInt(localStorage.getItem('improvementPaperPrice')) : 5000;
var improvementWoodPrice = localStorage.getItem('improvementWoodPrice') ? parseInt(localStorage.getItem('improvementWoodPrice')) : 25000;
var improvementSteakPrice = localStorage.getItem('improvementSteakPrice') ? parseInt(localStorage.getItem('improvementSteakPrice')) : 50000;
var improvementSheepPrice = localStorage.getItem('improvementSheepPrice') ? parseInt(localStorage.getItem('improvementSheepPrice')) : 7500;
var improvementFurnacePrice = localStorage.getItem('improvementFurnacePrice') ? parseInt(localStorage.getItem('improvementFurnacePrice')) : 100500;
var improvementCavePrice = localStorage.getItem('improvementCavePrice') ? parseInt(localStorage.getItem('improvementCavePrice')) : 500000;
var improvementPortalPrice = localStorage.getItem('improvementPortalPrice') ? parseInt(localStorage.getItem('improvementPortalPrice')) : 10000000;


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
    localStorage.setItem('improvementSteakPrice', improvementSteakPrice);
    localStorage.setItem('improvementSheepPrice', improvementSheepPrice);
    localStorage.setItem('improvementFurnacePrice', improvementFurnacePrice);
    localStorage.setItem('improvementCavePrice', improvementCavePrice);
    localStorage.setItem('improvementPortalPrice', improvementPortalPrice);
    
    
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
    improvementPaperPrice = localStorage.getItem('improvementPaperPrice') ? parseInt(localStorage.getItem('improvementPaperPrice')) : 5000;
    improvementWoodPrice = localStorage.getItem('improvementWoodPrice') ? parseInt(localStorage.getItem('improvementWoodPrice')) : 25000;
    improvementSteakPrice = localStorage.getItem('improvementSteakPrice') ? parseInt(localStorage.getItem('improvementSteakPrice')) : 50000;
    improvementSheepPrice = localStorage.getItem('improvementSheepPrice') ? parseInt(localStorage.getItem('improvementSheepPrice')) : 7500;
    improvementFurnacePrice = localStorage.getItem('improvementFurnacePrice') ? parseInt(localStorage.getItem('improvementFurnacePrice')) : 100500;
    improvementCavePrice = localStorage.getItem('improvementCavePrice') ? parseInt(localStorage.getItem('improvementCavePrice')) : 500000;
    improvementPortalPrice = localStorage.getItem('improvementPortalPrice') ? parseInt(localStorage.getItem('improvementPortalPrice')) : 10000000;

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
    updatePriceImprovementSteak();
    updatePriceImprovementSheep();
    updatePriceImprovementFurnace();
    updatePriceImprovementCave();
    updatePriceImprovementPortal();

}

function updateScore() {
    scoreCount.textContent = formatPrice(score);
}

function playButtonSound() {
    var audio = new Audio('assets/sound/button-sound.mp3');
    console.log(audio);
    audio.play();
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

    var petit1 = document.createElement('div');
    petit1.textContent = '+1';
    petit1.classList.add('petit1');
    document.body.appendChild(petit1);
    
   
    setTimeout(() => {
        petit1.remove();
    }, 500);
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

function updatePriceImprovementSteak() {
    var improvementSteakPriceElement = document.getElementById('improvementSteak-Price');
    improvementSteakPriceElement.textContent = formatPrice(improvementSteakPrice);
}

function updatePriceImprovementSheep() {
    var improvementSheepPriceElement = document.getElementById('improvementSheep-Price');
    improvementSheepPriceElement.textContent = formatPrice(improvementSheepPrice);
}

function updatePriceImprovementFurnace() {
    var improvementFurnacePriceElement = document.getElementById('improvementFurnace-Price');
    improvementFurnacePriceElement.textContent = formatPrice(improvementFurnacePrice);
}

function updatePriceImprovementCave() {
    var improvementCavePriceElement = document.getElementById('improvementCave-Price');
    improvementCavePriceElement.textContent = formatPrice(improvementCavePrice);
}

function updatePriceImprovementPortal() {
    var improvementPortalPriceElement = document.getElementById('improvementPortal-Price');
    improvementPortalPriceElement.textContent = formatPrice(improvementPortalPrice);
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

function improvementSteak() {
    if (score >= improvementSteakPrice) {
        score -= improvementSteakPrice;
        improvementSteakPrice *= 2 * 5;
        score *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementSteak();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this improvement!");
    }
}

function improvementSheep() {
    if (score >= improvementSheepPrice) {
        score -= improvementSheepPrice;
        improvementSheepPrice *= 2 * 5;
        stockElements["wool"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementSheep();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this improvement!");
    }
}

function improvementFurnace() {
    if (score >= improvementFurnacePrice) {
        score -= improvementFurnacePrice;
        improvementFurnacePrice *= 2 * 5;
        stockElements["coal"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementFurnace();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this improvement!");
    }
}

function improvementCave() {
    if (score >= improvementCavePrice) {
        score -= improvementCavePrice;
        improvementCavePrice *= 2 * 5;
        stockElements["lava"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementCave();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond; 
    } else {
        alert("You don't have enough score to buy this improvement!");
    }
}

function improvementPortal() {
    if (score >= improvementPortalPrice) {
        score -= improvementPortalPrice;
        improvementPortalPrice *= 2 * 5;
        stockElements["obsidienne"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementPortal();
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
        improvementPaperPrice = 5000
        updatePriceImprovementPaper()
        improvementWoodPrice = 25000
        updatePriceImprovementWood()
        improvementSteakPrice = 50000
        updatePriceImprovementSteak()
        improvementSheepPrice = 7500
        updatePriceImprovementSheep()
        improvementFurnacePrice = 100500
        updatePriceImprovementFurnace()
        improvementCavePrice = 500000
        updatePriceImprovementCave()
        improvementPortalPrice = 10000000
        updatePriceImprovementPortal()
        stockElements["paper"] = 1
        stockElements["wool"] = 2
        stockElements["wood"] = 5
        stockElements["coal"] = 25
        stockElements["lava"] = 250
        stockElements["obsidienne"] = 1000
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
clickImprovementClick.addEventListener('click', improvementSteak)
clickImprovementWool.addEventListener('click', improvementSheep)
clickImprovementCoal.addEventListener('click', improvementFurnace)
clickImprovementLava.addEventListener('click', improvementCave)
clickImprovementObsidienne.addEventListener('click', improvementPortal)




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
});// Get the elements from the HTML file
var scoreCount = document.getElementById('score-count');
var clickButton = document.getElementById('click');
var resetButton = document.getElementById('reset');

// Get the upgrade buttons
var clickUpgrade = document.getElementById('upgrade1');
var clickUpgradeW = document.getElementById('upgradeW');
var clickUpgrade2 = document.getElementById('upgrade2');
var clickUpgrade3 = document.getElementById('upgrade3');
var clickUpgrade4 = document.getElementById('upgrade4');
var clickUpgrade5 = document.getElementById('upgrade5');

// Get the improvement buttons
var clickImprovementPaper = document.getElementById('cisceaupdate');
var clickImprovementWood = document.getElementById('axeupdate');
var clickImprovementClick = document.getElementById('steakupdate');
var clickImprovementWool = document.getElementById('sheepupdate');
var clickImprovementCoal = document.getElementById('furnaceupdate');
var clickImprovementLava = document.getElementById('caveupdate');
var clickImprovementObsidienne = document.getElementById('portalupdate');

// Get other elements from the HTML file
var lastscoreElement = document.getElementById('lastscore');
var generateFlamme = document.getElementById('textflammepersecond');

// Initialize variables with default values or retrieve them from local storage
var score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
var flamesPerSecond = localStorage.getItem('flamesPerSecond') ? parseInt(localStorage.getItem('flamesPerSecond')) : 0;

var upgrade1Price = localStorage.getItem('upgrade1Price') ? parseInt(localStorage.getItem('upgrade1Price')) : 10;
var upgradeWPrice = localStorage.getItem('upgradeWPrice') ? parseInt(localStorage.getItem('upgradeWPrice')) : 30;
var upgrade2Price = localStorage.getItem('upgrade2Price') ? parseInt(localStorage.getItem('upgrade2Price')) : 100;
var upgrade3Price = localStorage.getItem('upgrade3Price') ? parseInt(localStorage.getItem('upgrade3Price')) : 500;
var upgrade4Price = localStorage.getItem('upgrade4Price') ? parseInt(localStorage.getItem('upgrade4Price')) : 7500;
var upgrade5Price = localStorage.getItem('upgrade5Price') ? parseInt(localStorage.getItem('upgrade5Price')) : 90000;

var improvementPaperPrice = localStorage.getItem('improvementPaperPrice') ? parseInt(localStorage.getItem('improvementPaperPrice')) : 5000;
var improvementWoodPrice = localStorage.getItem('improvementWoodPrice') ? parseInt(localStorage.getItem('improvementWoodPrice')) : 25000;
var improvementSteakPrice = localStorage.getItem('improvementSteakPrice') ? parseInt(localStorage.getItem('improvementSteakPrice')) : 50000;
var improvementSheepPrice = localStorage.getItem('improvementSheepPrice') ? parseInt(localStorage.getItem('improvementSheepPrice')) : 7500;
var improvementFurnacePrice = localStorage.getItem('improvementFurnacePrice') ? parseInt(localStorage.getItem('improvementFurnacePrice')) : 100500;
var improvementCavePrice = localStorage.getItem('improvementCavePrice') ? parseInt(localStorage.getItem('improvementCavePrice')) : 500000;
var improvementPortalPrice = localStorage.getItem('improvementPortalPrice') ? parseInt(localStorage.getItem('improvementPortalPrice')) : 10000000;

// Object to store the stock elements
var stockElements = {
    "paper": 1,
    "wool": 2,
    "wood": 5,
    "coal": 25,
    "lava": 250,
    "obsidienne": 1000
};

// Function to save the game state to local storage
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
    localStorage.setItem('improvementSteakPrice', improvementSteakPrice);
    localStorage.setItem('improvementSheepPrice', improvementSheepPrice);
    localStorage.setItem('improvementFurnacePrice', improvementFurnacePrice);
    localStorage.setItem('improvementCavePrice', improvementCavePrice);
    localStorage.setItem('improvementPortalPrice', improvementPortalPrice);
}

// Function to load the game state from local storage
function loadGameState() {
    score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
    flamesPerSecond = localStorage.getItem('flamesPerSecond') ? parseInt(localStorage.getItem('flamesPerSecond')) : 0;
    upgrade1Price = localStorage.getItem('upgrade1Price') ? parseInt(localStorage.getItem('upgrade1Price')) : 10;
    upgradeWPrice = localStorage.getItem('upgradeWPrice') ? parseInt(localStorage.getItem('upgradeWPrice')) : 30;
    upgrade2Price = localStorage.getItem('upgrade2Price') ? parseInt(localStorage.getItem('upgrade2Price')) : 100;
    upgrade3Price = localStorage.getItem('upgrade3Price') ? parseInt(localStorage.getItem('upgrade3Price')) : 500;
    upgrade4Price = localStorage.getItem('upgrade4Price') ? parseInt(localStorage.getItem('upgrade4Price')) : 7500;
    upgrade5Price = localStorage.getItem('upgrade5Price') ? parseInt(localStorage.getItem('upgrade5Price')) : 90000;
    improvementPaperPrice = localStorage.getItem('improvementPaperPrice') ? parseInt(localStorage.getItem('improvementPaperPrice')) : 5000;
    improvementWoodPrice = localStorage.getItem('improvementWoodPrice') ? parseInt(localStorage.getItem('improvementWoodPrice')) : 25000;
    improvementSteakPrice = localStorage.getItem('improvementSteakPrice') ? parseInt(localStorage.getItem('improvementSteakPrice')) : 50000;
    improvementSheepPrice = localStorage.getItem('improvementSheepPrice') ? parseInt(localStorage.getItem('improvementSheepPrice')) : 7500;
    improvementFurnacePrice = localStorage.getItem('improvementFurnacePrice') ? parseInt(localStorage.getItem('improvementFurnacePrice')) : 100500;
    improvementCavePrice = localStorage.getItem('improvementCavePrice') ? parseInt(localStorage.getItem('improvementCavePrice')) : 500000;
    improvementPortalPrice = localStorage.getItem('improvementPortalPrice') ? parseInt(localStorage.getItem('improvementPortalPrice')) : 10000000;

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
    updatePriceImprovementSteak();
    updatePriceImprovementSheep();
    updatePriceImprovementFurnace();
    updatePriceImprovementCave();
    updatePriceImprovementPortal();
}

// Function to update the score element in the HTML file
function updateScore() {
    scoreCount.textContent = formatPrice(score);
}

// Function to play a button sound
function playButtonSound() {
    var audio = new Audio('assets/sound/button-sound.mp3');
    console.log(audio);
    audio.play();
}

// Function to format the price with appropriate suffixes
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

// Function to add score when the click button is clicked
function addScore() {
    score++;
    updateScore();
    localStorage.setItem('score', score);
    saveGameState();

    var petit1 = document.createElement('div');
    petit1.textContent = '+1';
    petit1.classList.add('petit1');
    document.body.appendChild(petit1);

    setTimeout(() => {
        petit1.remove();
    }, 500);
}

// Function to update the flames per second text
function updateFlamesPerSecondText() {
    generateFlamme.textContent = "You generate " + formatPrice(flamesPerSecond) + " flames per second";
    localStorage.setItem('flamesPerSecond', flamesPerSecond)
}

// Functions to update the prices of the upgrades
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

// Functions to update the prices of the improvements
function updatePriceImprovementPaper() {
    var improvementPaperPriceElement = document.getElementById('improvementPaper-Price');
    improvementPaperPriceElement.textContent = formatPrice(improvementPaperPrice);
}

function updatePriceImprovementWood() {
    var improvementWoodPriceElement = document.getElementById('improvementWood-Price');
    improvementWoodPriceElement.textContent = formatPrice(improvementWoodPrice);
}

function updatePriceImprovementSteak() {
    var improvementSteakPriceElement = document.getElementById('improvementSteak-Price');
    improvementSteakPriceElement.textContent = formatPrice(improvementSteakPrice);
}

function updatePriceImprovementSheep() {
    var improvementSheepPriceElement = document.getElementById('improvementSheep-Price');
    improvementSheepPriceElement.textContent = formatPrice(improvementSheepPrice);
}

function updatePriceImprovementFurnace() {
    var improvementFurnacePriceElement = document.getElementById('improvementFurnace-Price');
    improvementFurnacePriceElement.textContent = formatPrice(improvementFurnacePrice);
}

function updatePriceImprovementCave() {
    var improvementCavePriceElement = document.getElementById('improvementCave-Price');
    improvementCavePriceElement.textContent = formatPrice(improvementCavePrice);
}

function updatePriceImprovementPortal() {
    var improvementPortalPriceElement = document.getElementById('improvementPortal-Price');
    improvementPortalPriceElement.textContent = formatPrice(improvementPortalPrice);
}

// Functions to handle the upgrades
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
    } else {
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

// Functions to handle the improvements
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

function improvementSteak() {
    if (score >= improvementSteakPrice) {
        score -= improvementSteakPrice;
        improvementSteakPrice *= 2 * 5;
        score *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementSteak();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this improvement!");
    }
}

function improvementSheep() {
    if (score >= improvementSheepPrice) {
        score -= improvementSheepPrice;
        improvementSheepPrice *= 2 * 5;
        stockElements["wool"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementSheep();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this improvement!");
    }
}

function improvementFurnace() {
    if (score >= improvementFurnacePrice) {
        score -= improvementFurnacePrice;
        improvementFurnacePrice *= 2 * 5;
        stockElements["coal"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementFurnace();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this improvement!");
    }
}

function improvementCave() {
    if (score >= improvementCavePrice) {
        score -= improvementCavePrice;
        improvementCavePrice *= 2 * 5;
        stockElements["lava"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementCave();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this improvement!");
    }
}

function improvementPortal() {
    if (score >= improvementPortalPrice) {
        score -= improvementPortalPrice;
        improvementPortalPrice *= 2 * 5;
        stockElements["obsidienne"] *= 2;
        updateScore();
        updateFlamesPerSecondText();
        updatePriceImprovementPortal();
        localStorage.setItem('score', score);
        saveGameState();
        return flamesPerSecond;
    } else {
        alert("You don't have enough score to buy this improvement!");
    }
}

// Function to reset the score and other game state variables
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
        improvementPaperPrice = 5000
        updatePriceImprovementPaper()
        improvementWoodPrice = 25000
        updatePriceImprovementWood()
        improvementSteakPrice = 50000
        updatePriceImprovementSteak()
        improvementSheepPrice = 7500
        updatePriceImprovementSheep()
        improvementFurnacePrice = 100500
        updatePriceImprovementFurnace()
        improvementCavePrice = 500000
        updatePriceImprovementCave()
        improvementPortalPrice = 10000000
        updatePriceImprovementPortal()
        stockElements["paper"] = 1
        stockElements["wool"] = 2
        stockElements["wood"] = 5
        stockElements["coal"] = 25
        stockElements["lava"] = 250
        stockElements["obsidienne"] = 1000
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


// Event listeners for the buttons
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
clickImprovementClick.addEventListener('click', improvementSteak)
clickImprovementWool.addEventListener('click', improvementSheep)
clickImprovementCoal.addEventListener('click', improvementFurnace)
clickImprovementLava.addEventListener('click', improvementCave)
clickImprovementObsidienne.addEventListener('click', improvementPortal)



// Call the functions to update the elements in the HTML file
updateScore();
setInterval(addFlamesPerSecond, 1000);
lastscoreElement.textContent = "LAST SCORE : " + score;

//updatePriceImprovementPaper();
updateUpgrade1Price();
updateUpgradeWPrice();
updateUpgrade2Price();
updateUpgrade3Price();
updateUpgrade4Price();
updateUpgrade5Price();
updateFlamesPerSecondText();

// Event listener to save the game state when the window is closed
window.addEventListener('beforeunload', function() {
    saveGameState();
});

// Event listener to load the game state when the window is loaded
window.addEventListener('load', function() {
    loadGameState();
});

window.addEventListener('load', function() {
    loadGameState();
});