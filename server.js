var express = require("express");
var middleware = require("./middleware");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(middleware.logger);


app.get("/hakkinda", middleware.requireAuthentication, function(req, res){

    res.send("Hakkımda Sayfası ....");

})

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function(){
    console.log("Express Server : " + PORT + " nolu portta başlatıldı....");
});

