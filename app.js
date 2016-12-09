var readline = require("readline-sync");
var timespan = require ('timespan');
var diceCounter = require ('./diceCounter.js');
var gameField = require ("./gameField.js");
var gameFieldController = require("./gameFieldController.js");

var gf = new gameField();
var gfc = new gameFieldController();

gf.fieldId = "325-856-958";

console.log(gf.fieldId);


var numberOfDice = readline.question("How many players? ");

for(var i = 0; i<numberOfDice; i++) {
    var dc = new diceCounter();
    dc.labelText = "player " + (i+1);
    dc.value = 20;
    
    gf.diceCounters.push(dc);
}

gfc.printDiceSummary(gf.diceCounters);

var a = 1;







var dc1 = new diceCounter();
var dc2 = new diceCounter();

dc1.labelText = "Player 1";
dc1.value = 20;
dc1.labelColor = "#FF0000";

dc2.labelText = "Player 2";
dc2.value = 20;

gf.diceCounters.push(dc1);
gf.diceCounters.push(dc2);

gfc.printDiceSummary(gf.diceCounters);



/*
var diceCount = readline.question("how many dice?");

for (var i = 0; i<diceCount; i++) {
    console.log(i);
}


while (true) {
    
}
*/

