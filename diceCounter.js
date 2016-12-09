var diceCounter = function() {
    var self = this;
    self.id = "";
    self.value =  20;
    self.labelText = "label";
    self.labelColor = "#ffffff";
    self.postionX = 50;
    self.postionY = 50;
    
    // methods below used by knockout
    self.increaseValue = function() {
        this.value(this.value() + 1);
    };
    
    self.decreaseValue = function() {
        this.value(this.value() - 1);
    };
};
module.exports = diceCounter;