var die = {
    size:6,
    roll: function(dieSize) {
        var result = Math.ceil(this.size * Math.random());
        return result;
    }
};

var totalResult=0;

die.size = process.argv[2];

for (totalRolls= 0; (totalRolls< process.argv[3]); totalRolls++) {
   var result=Math.ceil(die.size * Math.random());
   console.log(result) 
   totalResult+=result
}

var average=totalResult/totalRolls;

console.log("The die was rolled (" + totalRolls + ") time(s)");
console.log("You rolled a total of ("+ totalResult+ ")" );
console.log("You rolled an average of("+average+")");