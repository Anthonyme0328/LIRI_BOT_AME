// Require npm to link to keys
require("dotenv").config();

// Require the key.js file 
var keys = require('./keys.js');

// Require the node package manager for Spotify, request and moment
var request = require ('request');

var moment = require ('moment');

// require  file system module
var fs = require ("fs");


var Spotify = require ("node-spotify-api");
// save the spotify key as a new variable
var spotify = new Spotify(keys.spotify);

// Grab all of the command line arguments from Node
var nArgs = process.argv;



// blank inputs to be written over 
var userInput = "";
var nextUserInput = "";



//Grab user input for songs, artists and movie names
for (var i = 3; i < nArgs.length; i++) {

  
}
