
var express = require("express");
var path = require("path");
const { domainToASCII } = require("url");
var dbjson = require("./db/db.json");
const { fstat } = require("fs");
console.log("org dbjson", dbjson);
var fs = require('fs');



var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));





app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});


app.get("/api/notes", function(req, res) {
    res.json(dbjson);
});


app.post("/api/notes", function(req, res) {
    
    var newNote = req.body;
    dbjson.push(newNote);
    fs.writeFile("./db/db.json",JSON.stringify(dbjson), function(err){
        if (err) throw err;
        console.log('Saved!');
    
    })
    
    console.log("new dbjson", dbjson);


  });

  app.delete("/api/notes/:id", function(req, res) {
    res.json(waitlist);
});
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  











