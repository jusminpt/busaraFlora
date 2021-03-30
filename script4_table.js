"use strict";

window.addEventListener("load", function () {
    var orderFrom = document.forms.orderForm;
    orderForm.elements.class.focus();
    calcOrder();
    orderForm.elements.class.onchange = calcOrder;
    orderForm.elements.qty.onchange = calcOrder;
  });
  //8.
  function calcOrder() {
    //classes
    var orderForm = document.forms.orderForm;
    var classIndex = orderForm.elements.class.selectedIndex;  
    var classCost = orderForm.elements.class.options[classIndex].value; 
  
    //qty
    var qIndex = orderForm.elements.qty.selectedIndex;  
    var quantity = orderForm.elements.qty.options[qIndex].value; 
  
    
  
    //initialCost
    var initialCost = classCost * quantity;
    orderForm.elements.initialCost.value = formatUSCurrency(initialCost);
  
    //subtotal
    orderForm.elements.subtotal.value = formatNumber(initialCost, 2);
  
    //salesTax
    var salesTax = initialCost * 0.10;
    orderForm.elements.salesTax.value = formatNumber(salesTax, 2);
  
    //totalCost
    var totalCost = initialCost + salesTax;
    orderForm.elements.totalCost.value = formatUSCurrency(totalCost);
  
    //checkbox
    var checks = document.getElementsByClassName("check");
    var max = qIndex;
      for (var i = 0; i < checks.length; i++){
        checks[i].onclick = function(){
            var checkedChecks = document.querySelectorAll(".check:checked");
            if (checkedChecks.length > max + 1)
              return false;
          };
      }
    }
  //12.4 function expression
  function formatNumber(val, decimals) {
    return val.toLocaleString(undefined, {
       minimumFractionDigits: decimals,
       maximumFractionDigits: decimals
    }
    );
  }
  function formatUSCurrency(val) {
    return val.toLocaleString("en-US", {
       style: "currency",
       currency: "USD"
    });
  }