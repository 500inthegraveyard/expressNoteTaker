
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

//Below was where I tried to delet the new notes with id's but I couldnt get it to work:

// app.delete("/api/notes/:id", function(req, res) {
//   try {
//     notesData = fs.readFileSync("./develop/db/db.json", "utf8");
//     notesData = JSON.parse(notesData);
//     notesData = notesData.filter(function(note) {
//       return note.id != req.params.id;
//     });
//     notesData = JSON.stringify(notesData);
//     fs.writeFile("./develop/db/db.json", notesData, "utf8", function(err) {
//       if (err) throw err;
//     });
//     res.send(JSON.parse(notesData));
//   } catch (err) {
//     throw err;
//     console.log(err);
//   }
// });
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  











