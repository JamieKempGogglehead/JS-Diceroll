var die = {
    size:6,
    totalRolls: 0,
    roll: function(dieSize) {
        var result = Math.ceil(this.size * Math.random());
        this.totalRolls += 1;
        return result;
    }
};
die.size = process.argv[2];
console.log(die.roll());
console.log("The die was rolled (" + die.totalRolls + ") time(s)");
