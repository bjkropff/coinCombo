function coinCombo(coins){
  var change = []

  if (coins >= 25){
    change.push("quarter");
    coins -= 25;
  }else if(coins >= 10) {
    return "dime";
  }else if(coins >= 5){
    return "nickel";
  }else if(coins > 0){
    return "penny";
  }else{
    return false;
  };



  return change;
};
