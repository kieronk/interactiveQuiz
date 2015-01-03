$(document).ready(function () {

	var score = 0;
	var questionNumber = 0;
	
	var questionOne = {
		ask : "Question 1 ask ",
		choices : ["q1answer", "1b", "1c", "1d"],
		correctAnswer : "answerBoxA",
		hint : "It's a something for q1",
		questionFigure: "1"
	};

	var questionTwo = {
		ask : "Question 2 ask ",
		choices : ["question2answer", "2b", "2c", "2d"],
		correctAnswer : "answerBoxB",
		bar : "<span style='width: 25%' class='progressImage'></span>",
		hint : "it's a something for q2",
		questionFigure: "2"
	};	

	var questionThree = {
		ask : "Question 3 ask ",
		choices : ["question3answer", "3b", "3c", "3d"],
		correctAnswer : "answerBoxC",
		hint : "it's a something for q3",
		questionFigure: "3"

	};	

	var questionFour = {
	ask : "Question 4 ask ",
	choices : ["question4answer", "4b", "4c", "4d"],
	correctAnswer : "answerBoxD",
	hint : "it's a something for q4",
	questionFigure: "4"

	};	

	var questionFive = {
		ask : "That's it! You scored " + score + " points. Press the next button to start again",
		choices : ["", "", "", ""],
		hint : "",
		questionFigure: ""
	}

	var question = [questionOne, questionTwo, questionThree, questionFour, questionFive];

	var barLevels = ["<span style='width: 25%' class='progressImage'></span>", "<span style='width: 50%' class='progressImage'></span>", "<span style='width: 75%' class='progressImage'></span>", "<span style='width: 100%' class='progressImage'></span>"] 
	var barCount = 0

	$(".startAgain").hide();
	$(".progressText").hide();

	$(".answerSubmit").on("click", function() {
		console.log(questionNumber);
		
		if (questionNumber == 1 && $('.listitem1').prop('checked')) { 
				console.log("true" + questionNumber);
				alert("great job!!");
				score ++; 
				$(".scoreNumber").text(score);	
				}

		else if (questionNumber == 2 && $('.listitem2').prop('checked')) { 
				console.log("true" + questionNumber);
				alert("great job!");
				score ++; 
				$(".scoreNumber").text(score);	
				}

		else if (questionNumber == 3 && $('.listitem3').prop('checked')) { 
				console.log("true" + questionNumber);
				alert("great job!");
				score ++; 
				$(".scoreNumber").text(score);
				}

		else if (questionNumber == 4 && $('.listitem4').prop('checked')) { 
				console.log("true" + questionNumber);
				alert("great job!");
				score ++; 
				$(".scoreNumber").text(score);
				}

	});

	$("#reload").on("click", function() {
		location.reload();
	});

	$(".nextSubmit").on("click", function () {
		if (questionNumber == 4) {
			$(".nextSubmit").hide();
			$("li").hide();
			$(".startAgain").show();
			$("label").hide();
			$(".answerSubmit").hide();
			$(".progressImage").hide();
			$(".score").hide();
			$(".progressText").hide();
			$(".meter").hide();
			
		}
		var currentQuestion = question[questionNumber];
		$(".progressIntro").hide();		
		$(".progressText").toggle();
		$(".questionAQuestion").text(currentQuestion.ask);
		$("#answerBoxA").text(currentQuestion.choices[0]);
		$("#answerBoxB").text(currentQuestion.choices[1]);
		$("#answerBoxC").text(currentQuestion.choices[2]);
		$("#answerBoxD").text(currentQuestion.choices[3]);
		$(".hintText").text(currentQuestion.hint);
		$("span.questionFigure").text(currentQuestion.questionFigure);
		$("span.progressImage").replaceWith(barLevels[barCount]);
		questionNumber ++ ;
		barCount ++;
		console.log(questionNumber);

	});

	
	
});



//		else if (questionNumber === 0 && $('#answerBoxA').attr("checked", "checked")) { 
//		 	console.log("false");
//			}
	

/*	

		qnumber == 1 && $("#answerBoxA").prop("checked", false) {
		console.log("false") 
		}

		else if (qnumber == 2 && $("#answerBoxB").prop("checked", true)) {
		console.log("true");
		}

		else if (qnumber == 3 && $("#answerBoxC").prop("checked", true)) {
		console.log("true");
		}
		
		else if (qnumber == 4 && $("#answerBoxD").prop("checked", true)) {
		console.log("true");
		}

	});


$('<li class=""></li>').appendTo(".questionAChoices")
		.html('<input class="listitem1" type="radio" value="None" name="check"/><label for="answerBox" id="answerBoxA">' +  currentQuestion.choices[0]);

	var clickSubmit = function () {
		currentQuestion = question[questionNumber]
		$(".questionAQuestion").replaceWith(currentQuestion.ask);
		$("#answerBoxA").replaceWith(currentQuestion.choices[0]);
		$("#answerBoxB").replaceWith(currentQuestion.choices[1]);
		$("#answerBoxC").replaceWith(currentQuestion.choices[2]);
		$("#answerBoxD").replaceWith(currentQuestion.choices[3]);
		//questionNumber += ;
		//$("questionNumber").replaceWith(questionNumber);
		console.log("bkfj")
	};

	$(".nextSubmit").on("click", clickSubmit()); 





	var qnumber = 1;

	$(".question2").hide();
	$(".question3").hide();
	$(".question4").hide();
	$(".question5").hide();

	$(".nextSubmit").on("click", function() {
		
		if (qnumber == 1) {
			$(".question1").hide();
			$(".question2").show();
		}

		else if (qnumber == 2) {
			$(".question2").hide();
			$(".question3").show();
		}

		else if (qnumber == 3) {
			$(".question3").hide();
			$(".question4").show();
		}

		else if (qnumber == 4) {
			$(".question4").hide();
			$(".question5").show();
			$(".answerSubmit").hide();
			$(".nextSubmit").text("play again!");
		}
		console.log(qnumber);
		qnumber += 1;
		console.log(qnumber);
	});

	$(".answerSubmit").on("click", function() {
		if (qnumber === 1) {
			if ($("#answerBoxA").prop("checked", true)) { 
			console.log("true");
			}

		else if ($("#answerBoxA").prop("checked", false)) {
			console.log("false");
			}
	}
	
		qnumber == 1 && $("#answerBoxA").prop("checked", false) {
		console.log("false") 
		}

		else if (qnumber == 2 && $("#answerBoxB").prop("checked", true)) {
		console.log("true");
		}

		else if (qnumber == 3 && $("#answerBoxC").prop("checked", true)) {
		console.log("true");
		}
		
		else if (qnumber == 4 && $("#answerBoxD").prop("checked", true)) {
		console.log("true");
		}

	});

//		if (qnumber == 1) {

//		}
//	})
});

*/
