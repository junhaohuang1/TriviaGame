var questions = [{
    question: "Who is Boruto's dad?",
    choices: ["Saskue", "Rock Lee", "Kakashi", "Orochimaru", "Naruto"],
    correctAnswer: "Naruto"
}, {
    question: "Who was Saskue's first kiss?",
    choices: ["Sakura", "Rock Lee", "Ten Ten", "Ino", "Naruto"],
    correctAnswer: "Naruto"
}, {
    question: "Who is the 7th Hokage?",
    choices: ["Orochimaru", "Kakashi", "Naruto", "Ino", "Saskue"],
    correctAnswer: "Naruto"
}, {
    question: "Who is 4th Hokage's son?",
    choices: ["Neji", "Naruto", "Kakashi", "Obito", "Rock Lee"],
    correctAnswer: "Naruto"
}, {
    question: "Who is the current Kyuubi Jinchuriki?",
    choices: ["Bee", "Naruto", "Saskue", "Boruto", "Sarada"],
    correctAnswer: "Naruto"
}];

var images = ["picture1", "picture2", "picture3", "picture4", "picture5", ]

numberRight = 0;
numberWrong = 0;
numberUnanswered = 0;
var userAnswers = [];


for (var i = 0; i < questions.length; i++) {
    var pTag = $("<p>");
    var form = $("<form class='question'>");

    //set our question
    pTag.html(questions[i].question);
    
    for(var j = 0; j < questions[i].choices.length; j++){
        
        var label = $("<label class='radio-inline'>");

        var choice = $("<input type='radio' name='optradio'>");

        //set attributes for choice
        choice.attr("value", questions[i].choices[j]);
        label.append(choice);
        label.append(questions[i].choices[j]);
        form.append(label);
        pTag.append(form);
    }

    $('#questionDiv').append(pTag);


} // end for


//Countdown Timer
var n = 75;
setTimeout(countDown,1000);

function countDown(){
   n--;
   if(n > 0){
      setTimeout(countDown,1000);
   }

   $("#countdown").html(n);

   if (n === 0){
    grader();
   }


} //end countdown


//Function to grade the results
function grader(){


    //Finds questions.
    var selected = $('.question');
    $.each(selected, function(){
        var checkBox = $(this).find("input[type=radio]:checked");

        if (!checkBox.val()){
            console.log("unanswered");
            userAnswers.push("unanswered");
        }
        if (checkBox.val()) {
            console.log(checkBox.val());
            userAnswers.push(checkBox.val());
        }
        console.log(userAnswers);
    }) //end of each selected function

    //grades the questions
    for (var i = 0; i < questions.length; i++) {
        if (userAnswers[i]=="unanswered") {
            numberUnanswered++;
        }
        else {

            if (questions[i].correctAnswer==userAnswers[i]) {
                numberRight++;
            }
            if (questions[i].correctAnswer!=userAnswers[i]){
                numberWrong++;
            }
        }
        $("#correct").html(numberRight);
        $("#wrong").html(numberWrong);
        $("#unanswered").html(numberUnanswered);
        console.log(numberUnanswered);
        console.log(numberRight);
        console.log(numberWrong);
    }//end for

} // end grader function
