var answers = window.answers
answers.sectionOne = false;
answers.sectionTwo = false;
answers.sectionThree = false;
answers.sectionFour = false;


var number = typeof answers.myNumber === "number";
var string = typeof answers.myString === "string";
var boolean = typeof answers.myBoolean === "boolean";
var team = answers.team === answers.partnerOne + " and " + partnerTwo;
var testTrue = answers.trueValue === true


if(number && string && boolean && team && testTrue){
	answers.sectionOne = true;
}


var teamArray = answers.teamArray.length === 2;
var zings = false;
var zingArray = [];
zingArray.push(answers.zing1);
zingArray.push(answers.zing2);
zingArray.push(answers.zing3);
zingArray.push(answers.zing4);

var check = zingArray.filter(function(object){
	if(object.username && object.time && object.message){
		return true;
	}
});
if(check.length >= 4){
	zings = true;
}

if(zings && teamArray){
	answers.sectionTwo = true;
}

if(answers.loopPractice() === 5){
	//Need to get how any tweets we will send them and set that to the equals to value
	answers.sectionThree = true;
}

if(answers.onlyYours() === 1){
	answers.sectionFour = true;
}




console.log('answers', answers);
console.log("sectionOne", answers.sectionOne);
console.log("sectionTwo", answers.sectionTwo);
console.log("sectionThree", answers.sectionThree);
console.log("sectionFour", answers.sectionFour);
