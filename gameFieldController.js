var gameFieldController = function() {
    var self = this;
    
    self.printDiceSummary = function(diceCounters) {
        
        diceCounters.forEach(function(dc) {
            console.log("labelText: " + dc.labelText);
            console.log("labelColor: " + dc.labelColor);
            console.log("value: " + dc.value);
        });
    };
};
module.exports = gameFieldController;