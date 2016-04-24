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

if(answers.loopPractice() === 6){
	//Need to get how any tweets we will send them and set that to the equals to value
	answers.sectionThree = true;
}

if(answers.onlyYours() === 1){
	answers.sectionFour = true;
}

if(answers.sectionOne && answers.sectionTwo && answers.sectionThree && answers.sectionFour){
	alert("You have finished the race! Run to the whiteboard in the lecture room and write your team name on the list on the whiteboard")
} else if(answers.sectionOne && answers.sectionTwo && answers.sectionThree){
	alert("Make sure not to prick yourself when prying your clue from this desert staple")
} else if(answers.sectionOne && answers.sectionTwo){
	alert("Its heating up, make sure not to hit start or you might burn your clue")
} else if(answers.sectionOne){
	alert("Walk past Vader then hang a right and grab a cold one")
}
