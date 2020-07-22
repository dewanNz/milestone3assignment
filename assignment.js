// No.1: Create feetToMile function
function feetToMile(feet){
    if(feet<0)
  {
   console.log("Negative Value is not allowed");
   return false;
  }
  else {
    var mile = feet/5280;
    return mile;
  }
 }
 const result = feetToMile(-1);
 console.log(result);