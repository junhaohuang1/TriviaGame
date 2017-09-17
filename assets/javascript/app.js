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


numberRight = 0;
numberWrong = 0;
numberUnanswered = 0;
var userAnswers = [];


for (var i = 0; i < questions.length; i++) {
    var pTag = $("<p>");
    var form = $("<form class='question'>");

    
    pTag.html(questions[i].question);
    
    for(var j = 0; j < questions[i].choices.length; j++){
        
        var label = $("<label class='radio-inline'>");

        var choice = $("<input type='radio' name='optradio'>");

    
        choice.attr("value", questions[i].choices[j]);
        label.append(choice);
        label.append(questions[i].choices[j]);
        form.append(label);
        pTag.append(form);
    }

    $('#questionDiv').append(pTag);


} 



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


} 



function grader(){


    
    var selected = $('.question');
    $.each(selected, function(){
        var checkBox = $(this).find("input[type=radio]:checked");

        if (!checkBox.val()){
;
            userAnswers.push("unanswered");
        }
        if (checkBox.val()) {            
            userAnswers.push(checkBox.val());
        }

    })

    
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
    }

} 


