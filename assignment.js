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
 const resultMile = feetToMile(5280);
 console.log(resultMile);

 
 
 // No.2: Create woodCalculator function
 
 function woodCalculator(chair, table, bed){
    if(chair<0||table<0||bed<0)
  {
   console.log("Negative Value is not allowed");
   return false;
  }
  else {
    var chairWood = chair;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
  }
 
}
var resultWood = woodCalculator(1,1,1);
console.log(resultWood);



// No.3: Create brickCalculator function

function brickCalculator(floor){
    if(floor<11){
           var totalBrickUpToTen = floor * 15 * 1000;
           return totalBrickUpToTen;
        } 
        else if(floor<21){
            var totalBrickBelowTwenty = ((floor-10) * 12 * 1000)+(10 * 15 * 1000);
            return totalBrickBelowTwenty;
        } 
        else {
            var totalBrickTwentyAbove = ((floor-20) * 10 * 1000)+ (10 * 12 * 1000)+(10 * 15 * 1000);
            return totalBrickTwentyAbove;
        }  
}
var totalNumberOfBrick = brickCalculator(21);
console.log(totalNumberOfBrick);



// No.4: Create tinyFriend function

function tinyFriend(friends){
    var shortestName = friends[0];
    for (var i=0; i<friends.length; i++){
        var element = friends[i];
        if(element.length<shortestName.length){
            shortestName = element;
         }
    }
    return shortestName;

}
    var friends = ['Asaduzzaman','Abir', 'Tuhin', 'Anowar'];
    var shortNamedFriend = tinyFriend(friends);
    console.log("tiny Friend is: ", shortNamedFriend);