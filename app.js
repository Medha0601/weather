const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const http = require('http');



const app = express();

// bodyparser middleware
app.use(bodyParser.urlencoded({extended: true}));

// Static folder
app.use("/public", express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'home.html'));
});

// app.post('/', function(req, res){

//     request(
//         ur
//     )
// });

app.listen(30, function(req, res){
    console.log("Server is running at port");
});


// url: api.openweathermap.org/data/2.5/weather
// api:  2dfaab60ec03c5503601484dbba8191b
// api call:  api.openweathermap.org/data/2.5/weather?q=Pune&appid=5b8490f370ca6b2c39d43927b42fbaae

