var timespan = require ('timespan');
var diceCounter = require ('./diceCounter.js');
var gameField = require ("./gameField.js");
var gameFieldController = require("./gameFieldController.js");

var gf = new gameField();
var gfc = new gameFieldController();

gf.fieldId = "325-856-958";

console.log(gf.fieldId);

var dc1 = new diceCounter();
var dc2 = new diceCounter();

// todo: modify dice properties

gf.diceCounters.push(dc1);
gf.diceCounters.push(dc2);

gfc.printDiceSummary(gf.diceCounters);
