$(document).ready(function(){
	
	/*
	* Main module for MCQ
	*/
	var MultipleChoice = function(){
		/*
		* This function handles the option change event.
		*/
		function optionChangeHandler(evt){
			var arrVal = evt.target.id.split("_");
			var index = parseInt(arrVal[1]) - 1;
			var objQuestion = arrMCQ[index];
			
			//check answer and show feedback
			if(objQuestion.correctAnswer === parseInt(arrVal[2])){
				alert("Correct");
			} else {
				alert("Wrong");
			}
		}
		
		/*
		* This function loops over all options in a question and creates HTML to be appended into the view.
		*/
		function getQuestionHTML(obj, index){
			var strQuestion = "<div class='quiz'><p class='question'>" + obj.question + "</p><ul class='options'>";
			var len = Object.keys(obj.options).length;
			for (var i = 0; i < len; i++){
				strQuestion += "<input type='radio' name=option_" + index +" id=option_" + index + "_" + (i + 1) + "><label for=option_" + index + "_" + (i + 1) + ">" + obj.options[i] + "</label><br/>";
			}
			return strQuestion + "</ul></div>";
		}
		
		/*
		* This function loops over all questions and renders the MCQ view.
		*/
		function renderMCQ(){
			var len = arrMCQ.length;
			var strQuestions = "";
			for (var i = 0; i < len; i++){
				strQuestions += getQuestionHTML(arrMCQ[i], i+1);
			}
			$("#quizContainer").append(strQuestions);
		}
		
		return {
			/*
			* Bootstrap function for the MCQ module.
			*/
			init: function(){
				renderMCQ();
				$("#quizContainer").on("change", "input[type=radio]", optionChangeHandler);
			}
		}
	};
	
	//initialize Multiple Choice
	var objMCQ = new MultipleChoice();
	objMCQ.init();
});