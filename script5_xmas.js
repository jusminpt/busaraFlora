"use strict";

window.addEventListener("load",function(){
    //11.
    xmasEvent();
});
//=======================================================================================

 //7. Date() 
 function xmasEvent(){
   var xmas = {month:12}
   var current = new Date();

   if(current.getMonth()+1==xmas.month){
    setEventStyles();
    }
 }
//=======================================================================================

//6. link to ss_insert.css
//11. create link + insertRule()
function setEventStyles(){
  var eventStyle = document.createElement("link");
  eventStyle.setAttribute("rel","stylesheet");
  eventStyle.setAttribute("href","ss_insert.css");
  //append
  document.head.appendChild(eventStyle);

  //create divSnow Element
  var divSnow1 = document.createElement("div");
  divSnow1.setAttribute("class","snow1");
  var divSnow2 = document.createElement("div");
  divSnow2.setAttribute("class","snow2");
  var divSnow3 = document.createElement("div");
  divSnow3.setAttribute("class","snow3");

  document.body.insertBefore(divSnow1,document.body.lastChild);
  document.body.insertBefore(divSnow2,document.body.lastChild);
  document.body.insertBefore(divSnow3,document.body.lastChild);

  var buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("id", "styleButtons"); 

  var btn = document.createElement("input");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "myBtn");
  btn.setAttribute("title", "Special Deal!");
  btn.setAttribute("data-toggle", "popover");
  btn.setAttribute("data-trigger", "focus");
  btn.setAttribute("data-content", "Private classes are now $90/session");
  btn.setAttribute("value", "Xmas Deal");

  buttonDiv.appendChild(btn);
  document.body.insertBefore(buttonDiv, document.body.firstChild);

  var buttonStyles = document.createElement("style");
   document.head.appendChild(buttonStyles);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "div#styleButtons{\
        position: relative;\
        float : right;\
      }",0);

   document.styleSheets[document.styleSheets.length-1].insertRule(
      "div#styleButtons input{\
      background-color: #11742f;\
      border: 4px solid #18963e;\
      border-radius:100%;\
      color:white;\
      display:block;\
      font-size:0.8em;\
      font-weight: bold;\
      height:70px;\
      margin: 20px 25px;\
      width:80px;\
      }",1);

    btn.onclick = function(){
      alert("Private classes are now $90/session\nContact us now!");
    }
}
//=======================================================================================