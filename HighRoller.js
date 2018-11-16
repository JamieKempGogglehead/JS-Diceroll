var die = {
   size: 6,
   roll: function () {
      var result = Math.ceil(this.size * Math.random());
      return result;
   }
};

function start() {
   die.size = process.argv[2];
   rollDice(process.argv[3]);
}

function rollDice(rolls) {

   var resultList = {};
   var totalResult = 0;
   
   for (totalRolls = 0; totalRolls < rolls; totalRolls++) {
      var result = die.roll();
      resultList["Roll "+(totalRolls+1)] = result;
      totalResult += result
      
   }

   var average = totalResult / totalRolls;

   resultList.totalRolls=totalRolls;
   resultList.totalResult=totalResult;
   resultList.average=average

   return (resultList);
}

exports.rollDice = rollDice;
exports.die = die;