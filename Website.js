var express= require ("express");
var app = express();
app.get("/", function(req,res){
    res.send("Rolling dice...);
});
app.get("/Roll", function(req,res) {
    
}
)
app.listen(3000);
console.log ("Server started...");