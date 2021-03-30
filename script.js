"use strict";

//2.
//12.1.anonymous function
var mousePicEvent;

window.addEventListener("load", function(){
     //12.3 self invoking function
     //4.c
    setTimeout(function(){alert('Welcome to our lovely store!');},3000);
    
    //7. + 3.a
    runClock();

    //3.b
    upperText();
});

//3.b modify html content
function upperText() {
  var sheet = document.createElement("style");
  sheet.innerHTML = "button {text-transform: uppercase}";
  document.body.appendChild(sheet);
}
//=======================================================================================
//3.a create additional content to html
//7. Date()
function runClock(){

  var currentDay = new Date();
  var dateStr = currentDay.toLocaleDateString();
  var timeStr = currentDay.toLocaleTimeString();

  var d = document.createElement("div");
  var node = document.createTextNode(dateStr+"  "+timeStr);
  d.appendChild(node);
  var element = document.getElementById("footerAdd");
  element.appendChild(d);
}
//=======================================================================================