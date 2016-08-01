window.onload = function(){

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

var UserInputArray = new Array();
var lastClicked = 0;
var nextButton = $('#nextButton');
var backButton = $('#backButton');
var submitButton = $('#submitButton');
var questionDiv = $('#display-question');
var answerElementsLabels = [$('#answer1'), $('#answer2'), $('#answer3'), $('#answer4')];
var answerRadioButtons = [$('#radio1'), $('#radio2'), $('#radio3'), $('#radio4')];
var form1 = $('#answer-form');
var displaySubmitQuestion = $('#diplay-submit-question');
var submitButton = $('#submitButton');
var showScorePrompt = $('#score-div');

//questions array
var questionAnswerArray = new Array();
var questionAnswerArray = 
					[
					{
					question:"1. What is a closure?",
					choices:["A function delcared in another function that has access to the parent's variables.",
							 "A global variable.",
							 "A local variable.",
							 "A first class function."],
					correctAnswer:0,					
					},					
					{
					question:"2. Which of the answers empties the following array? var arrayList = ['a','b','c'];",
					choices:["Both the <head> section and the <body> section are correct",
							 "arrayList = 'empty'",
							 "arrayList = [];",
							 "You know nothing"], 
					correctAnswer:2,					
					},
					{
					question:"3. var f = function g(){ return 23; }; tyepOf g()",
					choices:["Number",
							 "Error",
							 "undefined"], 
					correctAnswer:1,					
					},
					{
					question:"4. Is JavaScript is an Object Oriented and Functional programming language?",
					choices:["true",
						     "false"], 
					correctAnswer:0,					
					},
					{
					question:"5. Which of the following is true about typeof operator in JavaScript?",
					choices:["The typeof is a unary operator that is placed before its single operand, which can be of any type.",
							 "Its value is a string indicating the data type of the operand.",
							 "Both of the above.",
							 "None of the above."], 
					correctAnswer:2,					
					}
				    ];


var userScore = {
	correct: 0,
	incorrect: 0,
}

var totalScore = 0;

// on submit click
submitButton.click(function(){

	//hide form
	form1.hide();
	//hide back
	backButton.hide(500);
	//hide submit button and submit question
	submitButton.hide(500);	
	displaySubmitQuestion.hide();

	//Display a big white score 
	showScorePrompt.show(600);	
	
});



//add question/answers to site
function populateFirstQuestion(){	
	showScorePrompt.hide();
	submitButton.hide();
	questionDiv.text(questionAnswerArray[0].question);			
};

// populate answers to radio buttons
function populateAnswers(){	
	var i;

	displaySubmitQuestion.hide();

	for(i=0;i<=questionAnswerArray[0].choices.length-1;i++)
	{		
		answerElementsLabels[i].text(questionAnswerArray[0].choices[i]);	
	}
};	

function displayOrHideRadioButtons_onNext(){
	for(i=0;i<=questionAnswerArray[lastClicked].choices.length;i++)
	{
	if(questionAnswerArray[lastClicked].choices[i]==undefined)
	{
		answerElementsLabels[i].hide();	
		answerRadioButtons[i].hide();		
	}
	else
	{					
		answerElementsLabels[i].text(questionAnswerArray[lastClicked].choices[i]);
		answerElementsLabels[i].show();
		answerRadioButtons[i].show();		
	}
  	}
};

function displaySubmitPage(){
	submitButton.show(500);		
	questionDiv.hide(500);
	form1.hide(500);		
	nextButton.hide(500);
	displaySubmitQuestion.show(500);
};

function displayQuestionAndButtons(){
	submitButton.hide(500);		
	questionDiv.show(500);
	form1.show(500);		
	nextButton.show(500);
	displaySubmitQuestion.hide(500);
};

function storeUserRadioInput(){

	if(questionAnswerArray[lastClicked].question[0] == 1)
	{
		//save questoin 1 variable
		UserInputArray[0] = $('input:radio:checked').val();
		console.log('user answer ' + UserInputArray[0] + ' stored for question 0');
	}
	else if(questionAnswerArray[lastClicked].question[0] == 1)
	{
		//save questoin 2 variable
		UserInputArray[1] = $('input:radio:checked').val();
		console.log('user answer ' + UserInputArray[1] + ' stored for question 1');
	}
	else if(questionAnswerArray[lastClicked].question[0] == 2)
	{
		//save questoin 3 variable
		UserInputArray[2] = $('input:radio:checked').val();
		console.log('user answer ' + UserInputArray[2] + ' stored for question 2');
	}
	else if(questionAnswerArray[lastClicked].question[0] == 3)
	{
		//save questoin 4 variable
		UserInputArray[3] = $('input:radio:checked').val();
		console.log('user answer ' + UserInputArray[3] + ' stored for question 3');
	}
	else if(questionAnswerArray[lastClicked].question[0] == 4)
	{
		//save questoin 5 variable
		UserInputArray[4] = $('input:radio:checked').val();
		console.log('user answer ' + UserInputArray[4] + ' stored for question 4');
	}

};




function checkTheRadioAndAddScore(){
		var correctAnswerVar = questionAnswerArray[lastClicked-1].correctAnswer;
		//If correct answer add to correct answer count
		var answer = $('input[name="radioButtons"]:checked', "#answer-form").val();
		console.log(answer);

		if (answer == correctAnswerVar)
		{		
			userScore.correct++;
			console.log('Right count ' + userScore.correct);				
			
		}
		//If incorrect answer add to incorrect answer count
		else
		{	
			userScore.incorrect++;
			console.log('Wrong count ' + userScore.incorrect);
		}		

		totalScore = (userScore.correct / questionAnswerArray.length) * 100;
		var showScore = $('#score').text("Your score is " + totalScore + "%");


};

function displayCorrectPage(){
	//If last page display submit page
		if(lastClicked>=questionAnswerArray.length)
		{
			displaySubmitPage();			
		}
		else
		//or show question and hide submit button	
		{			
			questionDiv.text(questionAnswerArray[lastClicked].question);
			submitButton.hide();
			displaySubmitQuestion.hide();			
		}
};


//click next button	
nextButton.click(function(){
	
	if($('input:radio:checked').length >0) 
	{
		storeUserRadioInput();		

		lastClicked++;		

		checkTheRadioAndAddScore();	

		$("input:radio").attr("checked",false);	

		displayCorrectPage();

		displayOrHideRadioButtons_onNext();			
	}
	else
	{
		alert('Please select an answer');
	}	

});


//click back button
backButton.click(function(){
	var i;

	//for questions				
	questionDiv.text(questionAnswerArray[lastClicked-1].question);


	if(lastClicked<=questionAnswerArray.length)
	{
		displayQuestionAndButtons();
	}

	repopulateAnswersOnBack();

	lastClicked--;
	//for answers
	for(i=0;i<=questionAnswerArray[lastClicked].choices.length;i++)
	{
		//hide radio buttons and labels
		if(questionAnswerArray[lastClicked].choices[i]==undefined)
		{

			/*hideEmptyRadioButtons_onBack();*/
			answerElementsLabels[i].hide();
			answerRadioButtons[i].hide();
			answerElementsLabels[i+1].hide();
			answerRadioButtons[i+1].hide();
		}
		//display buttons and labels if choices are defined
		else
		{
			answerElementsLabels[i].text(questionAnswerArray[lastClicked].choices[i]);
			answerElementsLabels[i].show();
			answerRadioButtons[i].show();
		}
			
	}
});


//TODO
//repopulate radios on back 

function repopulateAnswersOnBack(){
	

	//If we are on the question that the answer is associated with repop that radio button


	var i = 0;

	console.log("Length of user answer array " + UserInputArray[lastClicked].length);
	console.log("Lenght of questionAnswerArray[lastClicked].question[lastClicked] " + questionAnswerArray[lastClicked].question[lastClicked].length);

	if(UserInputArray[lastClicked].length == questionAnswerArray[lastClicked].question[lastClicked].length)
	{

		($("input:radio").attr("checked",true))
		
	}

	console.log("Last Clicked " + lastClicked);
	console.log("User answer array " + UserInputArray[lastClicked]); 

	i++;	
}


populateFirstQuestion();
populateAnswers();

}
