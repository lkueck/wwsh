//Rewrtie your if statement so that it looks over all of the zings and onlys shows zings by your username
//Do not touch the function declaration
function onlyYours(zingArray){
  var zingArray = [{username: "Mac"}, {username: "Person"}];
  var count = 0;
  //Write a for loop here that looks over the array coming in (zingArray), logs each value to the console, and adds one to count
  for(var i = 0; i < zingArray.length; i++){
    if(zingArray[i].username === "Mac"){
      console.log(zingArray[i]);
      count++;
    }
  }
  return count;
}






























//Do not touch this
var answers = window.answers;

answers.onlyYours = onlyYours;