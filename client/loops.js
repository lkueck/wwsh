//Do not touch the function declaration
function loopPractice(zingArray){
  var zingArray = [1,2,3,4,5];
  var count = 0;
  //Write a for loop here that looks over the array coming in (zingArray), logs each value to the console, and adds one to count
  for(var i = 0; i < zingArray.length; i++){
    console.log(zingArray[i]);
    count++;
  }
  return count;
}




























//Do not touch this
var answers = window.answers
answers.loopPractice = loopPractice;
