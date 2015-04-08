function coinCombo(coins){
  var change = [];
  if (coins === 0){
    change.push("no change for you");
  }else {
    while (coins>0){
      if (coins >= 25){
        change.push("quarter");
        coins -= 25;
      }else if(coins >= 10) {
        change.push("dime");
        coins -= 10;
      }else if(coins >= 5){
        change.push("nickel");
        coins -= 5;
      }else{
        change.push("penny");
        coins -=1;
      }
    }
  }

  return change;
};

function coinCombo2(coins){
  var countQ = 0;
  var countD = 0;
  var countN = 0;
  var countP = 0;

  if (coins === 0){
    change.push("no change for you");
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

  var result = countQ + " " + "quarters ";
  result += countD + " " + "dimes ";
  result += countN + " " + "nickels ";
  result += countP + " " + "pennies";
  return result;
};
