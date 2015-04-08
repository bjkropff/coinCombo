function coinCombo(coins){
  var countQ = 0;
  var countD = 0;
  var countN = 0;
  var countP = 0;
  var result = "";
  var noChange = "No change for you! "

  if (coins === 0){
    result = noChange;
  }else {
    while (coins>0){
      if (coins >= 25){
        countQ += 1;
        coins -= 25;
      }else if(coins >= 10) {
        countD += 1;
        coins -= 10;
      }else if(coins >= 5){
        countN += 1;
        coins -= 5;
      }else{
        countP += 1;
        coins -=1;
      }
    }
  }


  if (countQ > 1){
    result += countQ + " " + "quarters ";
  }else if(countQ === 1){
    result += countQ + " " + "quarter ";
  }

  if (countD > 1){
    result += countD + " " + "dimes ";
  }else if(countD === 1){
    result += countD + " " + "dime ";
  }

  if (countN > 1){
     result += countN + " " + "nickels ";
  }else if(countN === 1){
    result += countN + " " + "nickel ";
  }

  if(countP > 1){
     result += countP + " " + "pennies ";
  }else if(countP === 1){
    result += countP + " " + "penny ";
  }

  result = result.substring(0, result.length - 1);
  //var result = finalQ + finalD + finalN + finalP;
  return result;
};

$(document).ready(function() {
  $("form#money-input").submit(function(event) {
    var amount = parseInt($("input#amount").val());

    var coins = coinCombo(amount);
    $("#result").text(coins);

    $("#result").show();

    event.preventDefault();

  });
});
