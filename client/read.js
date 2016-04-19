var answers = window.answers
var sectionOne = false;
var sectionTwo = false;


var number = typeof answers.myNumber === "number";
var string = typeof answers.myString === "string";
var boolean = typeof answers.myBoolean === "boolean";
var team = answers.team === answers.partnerOne + " and " + partnerTwo;
var testTrue = answers.trueValue === true

console.log(number)
console.log(string)
console.log(boolean)
console.log(team)
console.log(testTrue)

if(number && string && boolean && team && testTrue){
	sectionOne = true;
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
	sectionTwo = true;
}




console.log('answers', answers);
console.log("sectionOne", sectionOne);
console.log("sectionTwo", sectionTwo)
