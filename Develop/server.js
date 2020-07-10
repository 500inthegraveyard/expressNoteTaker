
var express = require("express");
var path = require("path");
const { domainToASCII } = require("url");


var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var data = [
    {
        Name: "Note",
        noteText: "This is my note.",
        uniqueId: "1234",
    }, 
];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});


app.get("/api/notes", function(req, res) {
    res.json(data);
});


app.post("/api/notes", function(req, res) {
    
    var newNote = req.body;
    console.log(newNote)


  });

  app.delete("/api/notes/:id", function(req, res) {
    res.json(waitlist);
});
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  











