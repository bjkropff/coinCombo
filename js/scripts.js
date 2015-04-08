function coinCombo(coins){
  var change = []
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
