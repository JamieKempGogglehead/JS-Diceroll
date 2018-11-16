var express = require("express");
var highRoller = require("./HighRoller.js");
/*var mongo = require('mongodb');*/
var app = express();
app.get("/", function (req, res) {
    res.send("Rolling dice...");
});
app.get("/Roll", function (req, res) {
    
    var Rolls = req.query.Rolls;
    var Size = req.query.Size;
    highRoller.die.size = Size;
    var result = highRoller.rollDice(Rolls); 
    console.log(result);
    res.send(result);

    /*
    for (totalRolls = 0; totalRolls < 5; totalRolls++) {
        var result = Math.ceil(die.size * Math.random());
        console.log(result)
        res.send(result)
     }

     */
    
    //<form action="/Number_of_sides/" method="post">
    //<number for ="Sides">Enter number of sides:</number>
    //<input id="Sides" type="text" name="Sides_Field" value ="Default Number Of Sides."></input>
    //<input type="Submit" value="Done"></input>
    //</form>

})

app.listen(3000);
console.log("Server started...");