/*
 * Entry point for the watch app
 */
import document from "document";

let myanimation = document.getElementById("myanimation");

myanimation.animate("enable");


let main=document.getElementById("main");
let fight=document.getElementById("fightt");

//fight.text="Fight!";

fight.onactivate = function(evt) {
  main.style.visibility = "hidden";
  fight.style.visibility = "visible";
}

let train=document.getElementById("trainn");

//train.text="Train";

train.onactivate = function(evt) {
  main.style.visibility = "hidden";
  train.style.visibility = "visible";
}

let stats=document.getElementById("statss");

//stats.text="Stats";

stats.onactivate = function(evt) {
  main.style.visibility = "hidden";
  stats.style.visibility = "visible";
}