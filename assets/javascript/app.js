var myQuestions = new Map();

myQuestions.set("Who is Boruto's dad?", "Naruto");
myQuestions.set("Who was Saskue's first kiss?", "Naruto");
myQuestions.set("Who is the 7th Hokage?", "Naruto");
myQuestions.set("Who is 4th Hokage's son?", "Naruto");
myQuestions.set("Who is the current Kyuubi Jinchuriki?", "Naruto");





$(document).ready(function() {

    var isGameStarted = false;
    var isNewQuestion = false;

    $("#start-button").on('click'function() {
        isGameStarted = true;
        isNewQuestion = true;
        $("#game-area").append("<div>"+ stopwatch.time +"</div>");

    });

    var decrement = function() {

    }
    var stopwatch = {

        time: 30,
        reset: function() {
            stopwatch.time = 30;
            $("#display").html("30");

        },

        start: function() {


            if (isGameStarted) {
                intervalId = setInterval(stopwatch.count, 1000);
                clockRunning = true;

            }

        },
        stop: function() {


            clearInterval(intervalId);
            clockRunning = false;

        },

        count: function() {
            stopwatch.time++;
            var currentTime = stopwatch.timeConverter(stopwatch.time);
            $("#display").html(currentTime);

        },



        timeConverter: function(t) {


            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            } else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }
    };

});