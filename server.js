var express = require("express");
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication : function (req, res, next){
        console.log("Özel route girildi....");
        next();
    },
    logger : function(req, res, next){
        console.log(req.method + " " + req.originalURL);
        next();
    }
}

app.use(middleware.logger);


app.get("/hakkinda", middleware.requireAuthentication, function(req, res){

    res.send("Hakkımda Sayfası ....");

})

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function(){
    console.log("Express Server : " + PORT + " nolu portta başlatıldı....");
});

