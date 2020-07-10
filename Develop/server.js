
var express = require("express");
var path = require("path");
const { domainToASCII } = require("url");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// key:value pairs
var data = [
    {
        Name: "yoda",
        phoneNo: "000-000-0000",
        uniqueId: "JediMaster",
        email:"yoda@gmail.com"
    },
    {
        Name: "yoda",
        phoneNo: "000-000-0000",
        uniqueId: "JediMaster",
        email:"ggg@gmail.com"
    }
];

var waitlist = [];



// calls for the web page

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "public/tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "public/reserve.html"));
});

// Calls to the API

// Get: Fetch the reservation table
app.get("/api/tables", function(req, res) {
    res.json(data);
});

app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
});

// Post: Add a new reservation
app.post("/api/reserve", function(req, res) {
    
    var newReservation = req.body;
  
    //newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
    if (data.length !== 5){
        data.push(newReservation);
  
    res.json(true);
    } else {
        waitlist.push(newReservation);
        res.json(false);
    }

    
  });
  



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  











