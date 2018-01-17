var timeSpeed = 1000;
var incomeSpeed = 10;

var audio = new Audio("assets/idlemusic.ogg");
audio.loop = true;
audio.play();
audio.volume = 0.05;

var gameTimeData = {
	second: 0,
	minute: 0,
	hour: 0,
	day: 0,
	month: 0,
	year: 0
}

var userData = {
	atom: 0,
	cell: 0,
	plant: 0,
	cat: 0,
	human: 0,
	planet: 0,
	solarSystem: 0,
	galaxy: 0,
	universe: 0,
	multiverse: 0,
	atomIncome: 0,
	cellIncome: 0,
	plantIncome: 0,
	catIncome: 0,
	humanIncome: 0,
	planetIncome: 0,
	solarSystemIncome: 0,
	galaxyIncome: 0,
	universeIncome: 0
}

var basePrice = {
	cellPrice: 20,
	plantPrice: 30,
	catPrice: 40,
	humanPrice: 50,
	planetPrice: 60,
	solarSystemPrice: 70,
	galaxyPrice: 80,
	universePrice: 90,
	multiversePrice: 100
}

var price = {
	cellPrice: basePrice.cellPrice * (1.02^userData.cell),
	plantPrice: basePrice.plantPrice * (1.02^userData.plant),
	catPrice: basePrice.catPrice * (1.02^userData.cat),
	humanPrice: basePrice.humanPrice * (1.02^userData.human),
	planetPrice: basePrice.planetPrice * (1.02^userData.planet),
	solarSystemPrice: basePrice.solarSystemPrice * (1.02^userData.solarSystem),
	galaxyPrice: basePrice.galaxyPrice * (1.02^userData.galaxy),
	universePrice: basePrice.universePrice * (1.02^userData.universe),
	multiversePrice: basePrice.multiversePrice * (1.02^userData.multiverse)
}

var upgrade = {
	cellMulti: 1,
	cellMultiPrice: 100,
	plantMulti: 1,
	plantMultiPrice: 100000,
	catMulti: 1,
	catMultiPrice: 100,
	humanMulti: 1,
	humanMultiPrice: 100,
	planetMulti: 1,
	planetMultiPrice: 100,
	solarSystemMulti: 1,
	solarSystemMultiPrice: 100,
	galaxyMulti: 1,
	galaxyMultiPrice: 100,
	universeMulti: 1,
	universeMultiPrice: 100,
	multiverseMulti: 1,
	multiverseMultiPrice: 100
}



//Saving
function save(){
	var save = {
		second: gameTimeData.second,
		minute: gameTimeData.minute,
		hour: gameTimeData.hour,
		day: gameTimeData.day,
		month: gameTimeData.month,
		year: gameTimeData.year,

		atom: userData.atom,

		cell: userData.cell,
		cellPrice: price.cellPrice,
		cellMulti: upgrade.cellMulti,
		cellMultiPrice: upgrade.cellMultiPrice,

		plant: userData.plant,
		plantPrice: price.plantPrice,
		plantMulti: upgrade.plantMulti,
		plantMultiPrice: upgrade.plantMultiPrice,

		cat: userData.cat,
		catPrice: price.catPrice,
		catMulti: upgrade.catMulti,
		catMultiPrice: upgrade.catMultiPrice,

		human: userData.human,
		humanPrice: price.humanPrice,
		humanMulti: upgrade.humanMulti,
		humanMultiPrice: upgrade.humanMultiPrice,

		planet: userData.planet,
		planetPrice: price.planetPrice,
		planetMulti: upgrade.planetMulti,
		planetMultiPrice: upgrade.planetMultiPrice,

		solarSystem: userData.solarSystem,
		solarSystemPrice: price.solarSystemPrice,
		solarSystemMulti: upgrade.solarSystemMulti,
		solarSystemMultiPrice: upgrade.solarSystemMultiPrice,

		galaxy: userData.galaxy,
		galaxyPrice: price.galaxyPrice,
		galaxyMulti: upgrade.galaxyMulti,
		galaxyMultiPrice: upgrade.galaxyMultiPrice,

		universe: userData.universe,
		universePrice: price.universePrice,
		universeMulti: upgrade.universeMulti,
		universeMultiPrice: upgrade.universeMultiPrice,

		multiverse: userData.multiverse,
		multiversePrice: price.multiversePrice,
		multiverseMulti: upgrade.multiverseMulti,
		multiverseMultiPrice: upgrade.multiverseMultiPrice
	}
	localStorage.setItem("save",JSON.stringify(save)); 
}

function load(){
	var saveGame = JSON.parse(localStorage.getItem("save")); 

	if (typeof saveGame.second !== "undefined"){
		gameTimeData.second = saveGame.second;
	}
	if (typeof saveGame.minute !== "undefined"){
		gameTimeData.minute = saveGame.minute;
	}
	if (typeof saveGame.hour !== "undefined"){
		gameTimeData.hour = saveGame.hour;
	}
	if (typeof saveGame.day !== "undefined"){
		gameTimeData.day = saveGame.day;
	}
	if (typeof saveGame.month !== "undefined"){
		gameTimeData.month = saveGame.month;
	}
	if (typeof saveGame.year !== "undefined"){
		gameTimeData.year = saveGame.year;
	}


	if (typeof saveGame.atom !== "undefined"){
		userData.atom = saveGame.atom;
	}


	if (typeof saveGame.cell !== "undefined"){
		userData.cell = saveGame.cell;
	}
	if (typeof saveGame.cellPrice !== "undefined"){
		price.cellPrice = saveGame.cellPrice;
	}
	if (typeof saveGame.cellMulti !== "undefined"){
		upgrade.cellMulti = saveGame.cellMulti;
	}
	if (typeof saveGame.cellMultiPrice !== "undefined"){
		upgrade.cellMultiPrice = saveGame.cellMultiPrice;
	}


	if (typeof saveGame.plant !== "undefined"){
		userData.plant = saveGame.plant;
	}
	if (typeof saveGame.plantPrice !== "undefined"){
		price.plantPrice = saveGame.plantPrice;
	}
	if (typeof saveGame.plantMulti !== "undefined"){
		upgrade.plantMulti = saveGame.plantMulti;
	}
	if (typeof saveGame.plantMultiPrice !== "undefined"){
		upgrade.plantMultiPrice = saveGame.plantMultiPrice;
	}


	if (typeof saveGame.cat !== "undefined"){
		userData.cat = saveGame.cat;
	}
	if (typeof saveGame.catPrice !== "undefined"){
		price.catPrice = saveGame.catPrice;
	}
	if (typeof saveGame.catMulti !== "undefined"){
		upgrade.catMulti = saveGame.catMulti;
	}
	if (typeof saveGame.catMultiPrice !== "undefined"){
		upgrade.catMultiPrice = saveGame.catMultiPrice;
	}


	if (typeof saveGame.human !== "undefined"){
		userData.human = saveGame.human;
	}
	if (typeof saveGame.humanPrice !== "undefined"){
		price.humanPrice = saveGame.humanPrice;
	}
	if (typeof saveGame.humanMulti !== "undefined"){
		upgrade.humanMulti = saveGame.humanMulti;
	}
	if (typeof saveGame.humanMultiPrice !== "undefined"){
		upgrade.humanMultiPrice = saveGame.humanMultiPrice;
	}


	if (typeof saveGame.planet !== "undefined"){
		userData.planet = saveGame.planet;
	}
	if (typeof saveGame.planetPrice !== "undefined"){
		price.planetPrice = saveGame.planetPrice;
	}
	if (typeof saveGame.planetMulti !== "undefined"){
		upgrade.planetMulti = saveGame.planetMulti;
	}
	if (typeof saveGame.planetMultiPrice !== "undefined"){
		upgrade.planetMultiPrice = saveGame.planetMultiPrice;
	}


	if (typeof saveGame.solarSystem !== "undefined"){
		userData.solarSystem = saveGame.solarSystem;
	}
	if (typeof saveGame.solarSystemPrice !== "undefined"){
		price.solarSystemPrice = saveGame.solarSystemPrice;
	}
	if (typeof saveGame.solarSystemMulti !== "undefined"){
		upgrade.solarSystemMulti = saveGame.solarSystemMulti;
	}
	if (typeof saveGame.solarSystemMultiPrice !== "undefined"){
		upgrade.solarSystemMultiPrice = saveGame.solarSystemMultiPrice;
	}


	if (typeof saveGame.galaxy !== "undefined"){
		userData.galaxy = saveGame.galaxy;
	}
	if (typeof saveGame.galaxyPrice !== "undefined"){
		price.galaxyPrice = saveGame.galaxyPrice;
	}
	if (typeof saveGame.galaxyMulti !== "undefined"){
		upgrade.galaxyMulti = saveGame.galaxyMulti;
	}
	if (typeof saveGame.galaxyMultiPrice !== "undefined"){
		upgrade.galaxyMultiPrice = saveGame.galaxyMultiPrice;
	}


	if (typeof saveGame.universe !== "undefined"){
		userData.universe = saveGame.universe;
	}
	if (typeof saveGame.universePrice !== "undefined"){
		price.universePrice = saveGame.universePrice;
	}
	if (typeof saveGame.universeMulti !== "undefined"){
		upgrade.universeMulti = saveGame.universeMulti;
	}
	if (typeof saveGame.universeMultiPrice !== "undefined"){
		upgrade.universeMultiPrice = saveGame.universeMultiPrice;
	}


	if (typeof saveGame.multiverse !== "undefined"){
		userData.multiverse = saveGame.multiverse;
	}
	if (typeof saveGame.multiversePrice !== "undefined"){
		price.multiversePrice = saveGame.multiversePrice;
	}
	if (typeof saveGame.multiverseMulti !== "undefined"){
		upgrade.multiverseMulti = saveGame.multiverseMulti;
	}
	if (typeof saveGame.multiverseMultiPrice !== "undefined"){
		upgrade.multiverseMultiPrice = saveGame.multiverseMultiPrice;
	}	
}


function precise(x) {
  return Number.parseFloat(x).toPrecision(4);
}


//Income Functions
function getCurrency(){
	userData.atom += userData.atomIncome / 100;
	userData.cell += userData.cellIncome / 100;
	userData.plant += userData.plantIncome / 100;
	userData.cat += userData.catIncome / 100;
	userData.human += userData.humanIncome / 100;
	userData.planet += userData.planetIncome / 100;
	userData.solarSystem += userData.solarSystemIncome / 100;
	userData.galaxy += userData.galaxyIncome / 100;
	userData.universe += userData.universeIncome / 100;

	constructIncome();
}

function clicked(){
	userData.atom++;
};

function addCurrency(){
	getCurrency();
};

function getCell(){
	userData.cell++;
}

function getPlant(){
	userData.plant++;
}

function getCat(){
	userData.cat++;
}

function getHuman(){
	userData.human++;
}

function getPlanet(){
	userData.planet++;
}

function getSolarSystem(){
	userData.solarSystem++;
}

function getGalaxy(){
	userData.galaxy++;
}

function getUniverse(){
	userData.universe++;
}

function getMultiverse(){
	userData.multiverse++;
}

function addCell() {
	if (userData.atom >= price.cellPrice){
		getCell();
		userData.atom -= price.cellPrice;
		price.cellPrice += (1.02^userData.cell);
	}
};

function addPlant() {
	if (userData.cell >= price.plantPrice){
		getPlant();
		userData.cell -= price.plantPrice;
		price.plantPrice += (1.02^userData.plant);
	}
};

function addCat() {
	if (userData.plant >= price.catPrice){
		getCat();
		userData.plant -= price.catPrice;
		price.catPrice += (1.02^userData.cat);
	}
};

function addHuman() {
	if (userData.cat >= price.humanPrice){
		getHuman();
		userData.cat -= price.humanPrice;
		price.humanPrice += (1.02^userData.human);
	}
};

function addPlanet() {
	if (userData.human >= price.planetPrice){
		getPlanet();
		userData.human -= price.planetPrice;
		price.planetPrice += (1.02^userData.planet);
	}
};

function addSolarSystem() {
	if (userData.planet >= price.solarSystemPrice){
		getSolarSystem();
		userData.planet -= price.solarSystemPrice;
		price.solarSystemPrice += (1.02^userData.solarSystem);
	}
};

function addGalaxy() {
	if (userData.solarSystem >= price.galaxyPrice){
		getGalaxy();
		userData.solarSystem -= price.galaxyPrice;
		price.galaxyPrice += (1.02^userData.galaxy);
	}
};

function addUniverse() {
	if (userData.galaxy >= price.universePrice){
		getUniverse();
		userData.galaxy -= price.universePrice;
		price.universePrice += (1.02^userData.universe);
	}
};

function addMultiverse() {
	if (userData.universe >= price.multiversePrice){
		getMultiverse();
		userData.universe -= price.multiversePrice;
		price.multiversePrice += (1.02^userData.multiverse);
	}
};


//Income Adding Functions
function increase(){
	userData.atomIncome = (1.1 * userData.cell) * upgrade.cellMulti;
	price.cellPrice;

	userData.cellIncome = (0.5 * userData.plant) *  upgrade.plantMulti;
	price.plantPrice;

	userData.plantIncome = (0.4 * userData.cat) *  upgrade.catMulti;
	price.catPrice;

	userData.catIncome = (0.3 * userData.human) *  upgrade.humanMulti;
	price.humanPrice;

	userData.humanIncome = (0.2 * userData.planet) *  upgrade.planetMulti;
	price.planetPrice;

	userData.planetIncome = (0.15 * userData.solarSystem) * upgrade.solarSystemMulti;
	price.solarSystemPrice;

	userData.solarSystemIncome = (0.1 * userData.galaxy) *  upgrade.galaxyMulti;
	price.galaxyPrice;

	userData.galaxyIncome = (0.05 * userData.universe) *  upgrade.universeMulti;
	price.universePrice;

	userData.universeIncome = (0.005 * userData.multiverse) *  upgrade.multiverseMulti;
	price.multiversePrice;
};




//Upgrades

function upgradeCell(){
	if (userData.atom >= upgrade.cellMultiPrice) {
		upgrade.cellMulti = upgrade.cellMulti * 2;
		userData.atom -= upgrade.cellMultiPrice;
		upgrade.cellMultiPrice = upgrade.cellMultiPrice * 10;
	}
} 

function upgradePlant(){
	if (userData.atom >= upgrade.plantMultiPrice) {
		upgrade.plantMulti = upgrade.plantMulti * 2;
		userData.atom -= upgrade.plantMultiPrice;
		upgrade.plantMultiPrice = upgrade.plantMultiPrice * 10;
	}
}

function upgradeCat(){
	if (userData.atom >= upgrade.catMultiPrice) {
		upgrade.catMulti = upgrade.catMulti * 2;
		userData.atom -= upgrade.catMultiPrice;
		upgrade.catMultiPrice = upgrade.catMultiPrice * 10;
	}
}

function upgradeHuman(){
	if (userData.atom >= upgrade.humanMultiPrice) {
		upgrade.humanMulti = upgrade.humanMulti * 2;
		userData.atom -= upgrade.humanMultiPrice;
		upgrade.humanMultiPrice = upgrade.humanMultiPrice * 10;
	}
}

function upgradePlanet(){
	if (userData.atom >= upgrade.planetMultiPrice) {
		upgrade.planetMulti = upgrade.planetMulti * 2;
		userData.atom -= upgrade.planetMultiPrice;
		upgrade.planetMultiPrice = upgrade.planetMultiPrice * 10;
	}
}

function upgradeSolarSystem(){
	if (userData.atom >= upgrade.solarSystemMultiPrice) {
		upgrade.solarSystemMulti = upgrade.solarSystemMulti * 2;
		userData.atom -= upgrade.solarSystemMultiPrice;
		upgrade.solarSystemMultiPrice = upgrade.solarSystemMultiPrice * 10;
	}
}

function upgradeGalaxy(){
	if (userData.atom >= upgrade.galaxyMultiPrice) {
		upgrade.galaxyMulti = upgrade.galaxyMulti * 2;
		userData.atom -= upgrade.galaxyMultiPrice;
		upgrade.galaxyMultiPrice = upgrade.galaxyMultiPrice * 10;
	}
}

function upgradeUniverse(){
	if (userData.atom >= upgrade.universeMultiPrice) {
		upgrade.universeMulti = upgrade.universeMulti * 2;
		userData.atom -= upgrade.universeMultiPrice;
		upgrade.universeMultiPrice = upgrade.universeMultiPrice * 10;
	}
}

function upgradeMultiverse(){
	if (userData.atom >= upgrade.multiverseMultiPrice) {
		upgrade.multiverseMulti = upgrade.multiverseMulti * 2;
		userData.atom -= upgrade.multiverseMultiPrice;
		upgrade.multiverseMultiPrice = upgrade.multiverseMultiPrice * 10;
	}
}


//Timer Functions
var gameTime = setInterval(function(){
	addSecond();
}, timeSpeed);

var incomeTime = setInterval(function(){
	addCurrency();
	increase();
}, incomeSpeed)

function addSecond(){
	if (gameTimeData.second !== 60){
		save()
		gameTimeData.second++
	} else {
		gameTimeData.second = 1;
		addMinute();
	}
	constructTimeSection();
};

function addMinute(){
	if (gameTimeData.minute !== 60){
		gameTimeData.minute++
	} else {
		gameTimeData.minute = 0;
		addHour();
	}
	constructTimeSection();
};

function addHour(){
	if (gameTimeData.hour !== 24){
		gameTimeData.hour++
	} else {
		gameTimeData.hour = 0;
		addDay();
	}
	constructTimeSection();
};

function addDay(){
	if (!isEndOfMonth()){
		gameTimeData.day++;
	}else {
		gameTimeData.day = 0;
		addMonth();
	}
	constructTimeSection();
};

function addMonth(){
	if (gameTimeData.month !== 12){
		gameTimeData.month++;
	} else{
		gameTimeData.month = 0;
		gameTimeData.year++;
	}
	constructTimeSection();
};







//Constructor Functions
function constructTimeSection(){
	var timeSection = document.getElementById("game-time");
	var timeMessage = "Seconds: " + gameTimeData.second + " Minutes: " + gameTimeData.minute + " Hours: " + gameTimeData.hour + " Days: " + gameTimeData.day + " Months: " + gameTimeData.month + " Years: " + gameTimeData.year;

	timeSection.innerText = timeMessage;
}

function constructIncome(){

	//Buildings
	var incomeSectionAtom = document.getElementById("atom-income");
	var incomeMessageAtom = "Atoms: " + precise(userData.atom) + " Income Per Sec: " + precise(userData.atomIncome);

	var incomeSectionCell = document.getElementById("cell-income");
	var incomeMessageCell = "Cells: " + precise(userData.cell) + " Cells Per Sec: " + precise(userData.cellIncome) + " Price: " + precise(price.cellPrice) + " Atoms";

	var incomeSectionPlant = document.getElementById("plant-income");
	var incomeMessagePlant = "Plants: " + precise(userData.plant) + " Plants Per Sec: " + precise(userData.plantIncome) + " Price: " + precise(price.plantPrice) + " Cells";

	var incomeSectionCat = document.getElementById("cat-income");
	var incomeMessageCat = "Cats: " + precise(userData.cat) + "  Cats Per Sec: " + precise(userData.catIncome) + " Price: " + precise(price.catPrice) + " Plants"; 

	var incomeSectionHuman = document.getElementById("human-income");
	var incomeMessageHuman = "Humans: " + precise(userData.human) + " Humans Per Sec: " + precise(userData.humanIncome) + " Price: " + precise(price.humanPrice) + " Cats";

	var incomeSectionPlanet = document.getElementById("planet-income");
	var incomeMessagePlanet = "Planets: " + precise(userData.planet) + " Planets Per Sec: " + precise(userData.planetIncome) + " Price: " + precise(price.planetPrice) + " Humans";

	var incomeSectionSolarSystem = document.getElementById("solarSystem-income");
	var incomeMessageSolarSystem = "Solar Systems: " + precise(userData.solarSystem) + " Solar Systems Per Sec: " + precise(userData.solarSystemIncome) + " Price: " + precise(price.solarSystemPrice) + " Planets";

	var incomeSectionGalaxy = document.getElementById("galaxy-income");
	var incomeMessageGalaxy = "Galaxies: " + precise(userData.galaxy) + " Galaxies Per Sec: " + precise(userData.galaxyIncome) + " Price: " + precise(price.galaxyPrice) + " Solar Systems";

	var incomeSectionUniverse = document.getElementById("universe-income");
	var incomeMessageUniverse = "Universes: " + precise(userData.universe) + " Universes Per Sec: " + precise(userData.universeIncome) + " Price: " + precise(price.universePrice) + " Galaxies";

	var incomeSectionMultiverse = document.getElementById("multiverse-income");
	var incomeMessageMultiverse = "Multiverses: " + precise(userData.multiverse) + " Price: " + precise(price.multiversePrice) + " Universes";

	//Upgrades
	var incomeSectionCellUpgrade = document.getElementById("cell-upgrade");
	var incomeMessageCellUpgrade = "Multiplier: " + precise(upgrade.cellMulti) + " Price: " + precise(upgrade.cellMultiPrice) + " Atoms";

	var incomeSectionPlantUpgrade = document.getElementById("plant-upgrade");
	var incomeMessagePlantUpgrade = "Multiplier: " + precise(upgrade.plantMulti) + " Price: " + precise(upgrade.plantMultiPrice) + " Atoms";

	var incomeSectionCatUpgrade = document.getElementById("cat-upgrade");
	var incomeMessageCatUpgrade = "Multiplier: " + precise(upgrade.catMulti) + " Price: " + precise(upgrade.catMultiPrice) + " Atoms";

	var incomeSectionHumanUpgrade = document.getElementById("human-upgrade");
	var incomeMessageHumanUpgrade = "Multiplier: " + precise(upgrade.humanMulti) + " Price: " + precise(upgrade.humanMultiPrice) + " Atoms";

	var incomeSectionPlanetUpgrade = document.getElementById("planet-upgrade");
	var incomeMessagePlanetUpgrade = "Multiplier: " + precise(upgrade.planetMulti) + " Price: " + precise(upgrade.planetMultiPrice) + " Atoms";

	var incomeSectionSolarSystemUpgrade = document.getElementById("solarSystem-upgrade");
	var incomeMessageSolarSystemUpgrade = "Multiplier: " + precise(upgrade.solarSystemMulti) + " Price: " + precise(upgrade.solarSystemMultiPrice) + " Atoms";

	var incomeSectionGalaxyUpgrade = document.getElementById("galaxy-upgrade");
	var incomeMessageGalaxyUpgrade = "Multiplier: " + precise(upgrade.galaxyMulti) + " Price: " + precise(upgrade.galaxyMultiPrice) + " Atoms";

	var incomeSectionUniverseUpgrade = document.getElementById("universe-upgrade");
	var incomeMessageUniverseUpgrade = "Multiplier: " + precise(upgrade.universeMulti) + " Price: " + precise(upgrade.universeMultiPrice) + " Atoms";

	var incomeSectionMultiverseUpgrade = document.getElementById("multiverse-upgrade");
	var incomeMessageMultiverseUpgrade = "Multiplier: " + precise(upgrade.multiverseMulti) + " Price: " + precise(upgrade.multiverseMultiPrice) + " Atoms";

	incomeSectionAtom.innerText = incomeMessageAtom;
	incomeSectionCell.innerText = incomeMessageCell;
	incomeSectionPlant.innerText = incomeMessagePlant;
	incomeSectionCat.innerText = incomeMessageCat;
	incomeSectionHuman.innerText = incomeMessageHuman;
	incomeSectionPlanet.innerText = incomeMessagePlanet;
	incomeSectionSolarSystem.innerText = incomeMessageSolarSystem;
	incomeSectionGalaxy.innerText = incomeMessageGalaxy;
	incomeSectionUniverse.innerText = incomeMessageUniverse;
	incomeSectionMultiverse.innerText = incomeMessageMultiverse;

	incomeSectionCellUpgrade.innerText = incomeMessageCellUpgrade;
	incomeSectionPlantUpgrade.innerText = incomeMessagePlantUpgrade;
	incomeSectionCatUpgrade.innerText = incomeMessageCatUpgrade;
	incomeSectionHumanUpgrade.innerText = incomeMessageHumanUpgrade;
	incomeSectionPlanetUpgrade.innerText = incomeMessagePlanetUpgrade;
	incomeSectionSolarSystemUpgrade.innerText = incomeMessageSolarSystemUpgrade;
	incomeSectionGalaxyUpgrade.innerText = incomeMessageGalaxyUpgrade;
	incomeSectionUniverseUpgrade.innerText = incomeMessageUniverseUpgrade;
	incomeSectionMultiverseUpgrade.innerText = incomeMessageMultiverseUpgrade;
}

//Check Functions
function isEndOfMonth(){
	var endOfMonth = false;
	switch(true){
		case(gameTimeData.month === 1 && gameTimeData.day === 31):
			endOfMonth = true;
			break;
		case(gameTimeData.month === 2 && gameTimeData.day === 28):
			endOfMonth = true;
			break;
		case(gameTimeData.month === 3 && gameTimeData.day === 31):
			endOfMonth = true;
			break;
		case(gameTimeData.month === 4 && gameTimeData.day === 30):
			endOfMonth = true;
			break;
		case(gameTimeData.month === 5 && gameTimeData.day === 31):
			endOfMonth = true;
			break;
		case(gameTimeData.month === 6 && gameTimeData.day === 30):
			endOfMonth = true;
			break;
		case(gameTimeData.month === 7 && gameTimeData.day === 31):
			endOfMonth = true;
			break;
		case(gameTimeData.month === 8 && gameTimeData.day === 31):
			endOfMonth = true;
			break;
		case(gameTimeData.month === 9 && gameTimeData.day === 30):
			endOfMonth = true;
			break;
		case(gameTimeData.month === 10 && gameTimeData.day === 31):
			endOfMonth = true;
			break;
		case(gameTimeData.month === 11 && gameTimeData.day === 30):
			endOfMonth = true;
			break;
		case(gameTimeData.month === 12 && gameTimeData.day === 31):
			endOfMonth = true;
			break;
		default:
			endOfMonth = false;
	}

	return endOfMonth;
}

load();