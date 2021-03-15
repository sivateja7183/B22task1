var newArray = ["radar","civic","miss",121,434,112]
var palfun = ele=>{
  var string = String(ele);
  let i=0;
  let j =string.length -1;
  while(i<j){
    if(string[i] === string[j]){
      i++;
      j--;
    }
    else {
      return false;
    }
 }
 return true;
};
var palArray = newArray=>{
  return newArray.filter(ele=>palfun(ele));
};
console.log(palArray(newArray));
              

// << ["radar", "civic" ,121,434]

