"use strict";

window.addEventListener("load",function(){
    //4.a
    mouseOver();
    mouseOut();
});
//=======================================================================================
//4.a
function mouseOver(){
  var h1 = document.getElementById("heading");
  
    h1.onmouseover= function(){
      document.getElementById("heading").style.color = "green";
  }
}
function mouseOut(){
  var h1 = document.getElementById("heading");
  
    h1.onmouseout= function(){
      document.getElementById("heading").style.color = "black";
  }
}

